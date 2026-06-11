"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useParams } from "next/navigation";
import "../../book-demo-session/book-demo.css";

interface Slot {
  time: string;
  available: boolean;
  hourStr: string;
}

interface BookingDetails {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function ReschedulePage() {
  const params = useParams();
  const bookingId = params.id as string;

  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Generate next 30 days for the date selector
  const nextDays = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  useEffect(() => {
    async function fetchBookingDetails() {
      try {
        const res = await fetch(`/api/bookings/${bookingId}`);
        const data = await res.json();
        
        if (!res.ok) {
          setError(data.error || "Booking not found");
        } else {
          setBooking(data.booking);
          // Set initial date to the current booking's date
          const currentStartTime = new Date(data.booking.startTime);
          if (currentStartTime > new Date()) {
            setSelectedDate(currentStartTime);
          }
        }
      } catch (err) {
        setError("Failed to load booking details");
      } finally {
        setLoadingInitial(false);
      }
    }

    if (bookingId) {
      fetchBookingDetails();
    }
  }, [bookingId]);

  useEffect(() => {
    async function fetchSlots() {
      setLoadingSlots(true);
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
        setLoadingSlots(false);
      }
    }
    fetchSlots();
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !booking) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/bookings/${bookingId}/reschedule`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          time: selectedSlot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong.");
        setSubmitting(false);
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingInitial) {
    return (
      <div className="min-h-screen bg-[#010a1f] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#f3b400] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-[#010a1f] flex items-center justify-center p-4">
        <div className="bg-[#05132d] border border-white/10 p-8 rounded-2xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Oops!</h2>
          <p className="text-white/70 mb-6">{error || "Something went wrong."}</p>
          <Link href="/">
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="booking-page-container">
        <div className="booking-circuit-bg" />
        <div className="booking-glow" />
        <div className="booking-content flex items-center justify-center">
          <div className="booking-card-wrapper border border-white/10 bg-[#010a1f]/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f3b400] to-transparent"></div>
            
            <div className="mb-8 flex justify-center">
              <div className="h-20 w-20 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                🔄
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Rescheduled!</h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Your session has been successfully rescheduled. We've sent you a confirmation email with the new details and updated your calendar.
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

  const currentStartTime = new Date(booking.startTime);

  return (
    <div className="booking-page-container">
      <div className="booking-circuit-bg" />
      <div className="booking-glow" />

      <div className="booking-content">
        <div className="booking-card-wrapper border border-white/10 bg-[#010a1f]/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full">
          <div className="pb-8 mb-8 border-b border-white/5">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Reschedule Session</h2>
            <p className="text-lg text-white/70">
              Hi {booking.name.split(" ")[0]}, pick a new time for your 1-on-1 demo.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="booking-grid">
                {/* Left Column: Date & Time */}
                <div className="booking-left-col">
                  {/* Date Selection */}
                  <div className="booking-section">
                    <Label className="booking-section-title">1. Select New Date</Label>
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
                    <Label className="booking-section-title">2. Select New Time</Label>
                    {loadingSlots ? (
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
                  <div className="summary-card mb-6 border-blue-500/30 bg-blue-500/5">
                    <h3 className="font-semibold text-lg mb-4 text-blue-400">Current Session</h3>
                    <div className="summary-item">
                      <span className="text-white/60">Date</span>
                      <span className="font-medium">
                        {currentStartTime.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text-white/60">Time</span>
                      <span className="font-medium">
                        {currentStartTime.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="summary-card">
                    <h3 className="font-semibold text-lg mb-4 text-[#f3b400]">New Session</h3>
                    <div className="summary-item">
                      <span className="text-white/60">Date</span>
                      <span className="font-medium text-white">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text-white/60">Time</span>
                      <span className="font-medium text-white">
                        {slots.find((s) => s.time === selectedSlot)?.hourStr || "Not selected"}
                      </span>
                    </div>
                  </div>

                  <div className="mobile-sticky-cta mt-6">
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-semibold shadow-[0_0_20px_rgba(243,180,0,0.2)]"
                      disabled={!selectedSlot || submitting}
                    >
                      {submitting ? "Rescheduling..." : "Confirm Reschedule"}
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
