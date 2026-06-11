"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import "./book-demo.css";

import Script from "next/script";
import Link from "next/link";

// Add Razorpay window typing
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

interface Slot {
  time: string;
  available: boolean;
  hourStr: string;
}

export default function BookDemoPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [meetLink, setMeetLink] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Generate next 30 days for the date selector
  const nextDays = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  useEffect(() => {
    async function fetchSlots() {
      setLoading(true);
      try {
        const dateStr = selectedDate.toISOString().split("T")[0];
        const res = await fetch(`/api/bookings/slots?date=${dateStr}`);
        const data = await res.json();
        if (data.slots) {
          setSlots(data.slots);
        }
      } catch (err) {
        console.error("Failed to fetch slots", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSlots();
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    setSubmitting(true);
    try {
      // 1. Create booking reservation
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString().split("T")[0],
          time: selectedSlot,
        }),
      });

      const bookingData = await res.json();

      if (!res.ok) {
        alert(bookingData.error || "Something went wrong.");
        setSubmitting(false);
        return;
      }

      // 2. Create Razorpay order
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: bookingData.bookingId,
          amount: 99900, // 999 INR in paise
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        alert(orderData.error || "Failed to create payment order.");
        setSubmitting(false);
        return;
      }

      // 3. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Varun Sanduja",
        description: "Demo Booking Fee",
        order_id: orderData.id,
        handler: async function (response: any) {
          // 4. Verify Payment Signature
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (verifyRes.ok) {
              const verifyData = await verifyRes.json();
              setSuccess(true);
              if (verifyData.meetLink) {
                setMeetLink(verifyData.meetLink);
              }
              setSlots((prev) =>
                prev.map((s) => (s.time === selectedSlot ? { ...s, available: false } : s))
              );
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification error.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#f3b400",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response: any) {
        alert("Payment Failed: " + response.error.description);
      });
      rzp1.open();
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="booking-page-container">
        <div className="booking-circuit-bg" />
        <div className="booking-glow" />
        <div className="booking-content flex items-center justify-center">
          <div className="booking-card-wrapper border border-white/10 bg-[#010a1f]/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f3b400] to-transparent"></div>
            
            <div className="mb-8 flex justify-center">
              <div className="h-20 w-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                ✓
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Demo Booked!</h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Your slot has been reserved successfully. We have sent a confirmation email with all the meeting details.
            </p>

            <Link href="/">
              <Button
                className="mt-6 h-14 px-10 text-lg font-bold bg-gradient-to-r from-[#f3b400] to-[#e0a600] hover:from-[#e0a600] hover:to-[#c49000] text-black shadow-[0_0_25px_rgba(243,180,0,0.4)] hover:shadow-[0_0_35px_rgba(243,180,0,0.6)] hover:scale-105 transition-all rounded-full tracking-wide"
              >
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page-container">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="booking-circuit-bg" />
      <div className="booking-glow" />

      <div className="booking-content">
        <div className="booking-card-wrapper border border-white/10 bg-[#010a1f]/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full">
          <div className="pb-8 mb-8 border-b border-white/5">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Book a Demo</h2>
            <p className="text-lg text-white/70">
              Select a convenient time for a 1-on-1 personalized demo session.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="booking-grid">
                {/* Left Column: Date & Time */}
                <div className="booking-left-col">
                  {/* Date Selection */}
                  <div className="booking-section">
                    <Label className="booking-section-title">1. Select Date</Label>
                    <div className="date-selector-grid">
                      {nextDays.map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedSlot(null);
                          }}
                          className={`date-btn ${
                            selectedDate.getDate() === date.getDate() ? "active" : ""
                          }`}
                        >
                          <span className="date-btn-day">
                            {date.toLocaleDateString("en-US", { weekday: "short" })}
                          </span>
                          <span className="date-btn-num">{date.getDate()}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="booking-section">
                    <Label className="booking-section-title">2. Select Time</Label>
                    {loading ? (
                      <div className="text-sm text-white/50 animate-pulse">Loading slots...</div>
                    ) : (
                      <div className="slot-grid">
                        {slots.map((slot, i) => (
                          <button
                            key={i}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setSelectedSlot(slot.time)}
                            className={`slot-btn ${selectedSlot === slot.time ? "active" : ""}`}
                          >
                            {slot.hourStr}
                          </button>
                        ))}
                        {slots.length === 0 && (
                          <div className="text-sm text-white/50 col-span-full">
                            No slots available on this date.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Details & Summary */}
                <div className="booking-right-col">
                  {/* Booking Summary Card */}
                  <div className="summary-card">
                    <h3 className="font-semibold text-lg mb-4 text-white/90">Booking Summary</h3>
                    <div className="summary-item">
                      <span className="text-white/60">Session</span>
                      <span className="font-medium">1-on-1 Demo</span>
                    </div>
                    <div className="summary-item">
                      <span className="text-white/60">Duration</span>
                      <span className="font-medium">60 Min</span>
                    </div>
                    <div className="summary-item">
                      <span className="text-white/60">Date</span>
                      <span className="font-medium">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text-white/60">Time</span>
                      <span className="font-medium">
                        {slots.find((s) => s.time === selectedSlot)?.hourStr || "Not selected"}
                      </span>
                    </div>
                    <div className="summary-item mt-3 pt-4 border-t border-white/10">
                      <span className="text-white/90 font-semibold">Total Price</span>
                      <span className="font-bold text-[#f3b400] text-xl">₹999</span>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4 pt-2">
                    <h3 className="font-semibold text-lg text-white/90">3. Your Details</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          placeholder="John Doe"
                          className="bg-black/20 border-white/10 focus:border-[#f3b400] h-12"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="bg-black/20 border-white/10 focus:border-[#f3b400] h-12"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="bg-black/20 border-white/10 focus:border-[#f3b400] h-12"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mobile-sticky-cta">
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-semibold shadow-[0_0_20px_rgba(243,180,0,0.2)]"
                      disabled={!selectedSlot || submitting}
                    >
                      {submitting ? "Booking Demo..." : "Book Demo"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
