"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import "../../book-demo-session/book-demo.css";

interface Slot {
  time: string;
  available: boolean;
  hourStr: string;
}

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  startTime: string;
  endTime: string;
  status: "reserved" | "confirmed" | "cancelled";
  paymentStatus: "pending" | "paid";
  meetLink?: string;
  createdAt: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [rescheduleModal, setRescheduleModal] = useState<{ open: boolean; booking: Booking | null }>({
    open: false,
    booking: null,
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Generate next 30 days for the date selector
  const nextDays = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  useEffect(() => {
    fetchBookings();
  }, []);

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

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      if (data.bookings) setBookings(data.bookings);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id: string) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    try {
      const res = await fetch(`/api/admin/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      });
      if (res.ok) {
        setBookings((prev) => prev.map((b) => (b._id === id ? { ...b, status: "cancelled" } : b)));
      }
    } catch (error) {
      console.error("Failed to cancel:", error);
    }
  };

  const handleReschedule = async () => {
    if (!rescheduleModal.booking || !selectedSlot) return;
    
    const newStartTime = new Date(selectedSlot);
    const newEndTime = new Date(newStartTime.getTime() + 60 * 60 * 1000);

    try {
      const res = await fetch(`/api/admin/bookings/${rescheduleModal.booking._id}/reschedule`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startTime: newStartTime.toISOString(), endTime: newEndTime.toISOString() }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) =>
            b._id === rescheduleModal.booking?._id
              ? { ...b, startTime: newStartTime.toISOString(), endTime: newEndTime.toISOString() }
              : b
          )
        );
        setRescheduleModal({ open: false, booking: null });
      } else {
        alert("Failed to reschedule");
      }
    } catch (error) {
      console.error("Failed to reschedule:", error);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate Stats
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const pendingBookings = bookings.filter(b => b.status === "reserved").length;
  const revenue = bookings.filter(b => b.paymentStatus === "paid").length * 999;

  return (
    <div className="min-h-screen bg-[#010a1f] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col">
          <div 
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f3b400] uppercase self-start"
            style={{ marginBottom: '12px' }}
          >
            Admin Portal
          </div>
          <h1 
            className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
            style={{ marginBottom: '12px' }}
          >
            Bookings Dashboard
          </h1>
          <p 
            className="text-base text-white/60"
            style={{ marginBottom: '32px' }}
          >
            Manage your sessions, track revenue, and monitor client interactions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#05132d] border border-white/10 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-white/50 mb-1">Total Bookings</h3>
            <p className="text-3xl font-bold text-white">{totalBookings}</p>
          </div>
          <div className="bg-[#05132d] border border-white/10 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-white/50 mb-1">Confirmed Sessions</h3>
            <p className="text-3xl font-bold text-[#4ade80]">{confirmedBookings}</p>
          </div>
          <div className="bg-[#05132d] border border-white/10 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-white/50 mb-1">Pending/Reserved</h3>
            <p className="text-3xl font-bold text-[#f3b400]">{pendingBookings}</p>
          </div>
          <div className="bg-[#05132d] border border-white/10 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-white/50 mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold text-[#60a5fa]">₹{revenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#05132d]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-4 shadow-sm">
          <Input
            placeholder="Search by client name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 h-10 bg-black/40 border-white/10 focus:border-white/30 text-white placeholder:text-white/40 rounded-lg px-4"
          />
          <select
            className="w-full md:w-[220px] h-10 rounded-lg border border-white/10 bg-black/40 px-4 text-sm text-white outline-none focus:border-white/30 transition-colors"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all" className="bg-[#05132d]">All Statuses</option>
            <option value="confirmed" className="bg-[#05132d]">Confirmed</option>
            <option value="reserved" className="bg-[#05132d]">Reserved</option>
            <option value="cancelled" className="bg-[#05132d]">Cancelled</option>
          </select>
        </div>

        {/* Table Container */}
        <div className="bg-[#05132d]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-6 overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-white/50 text-sm">Loading bookings...</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10 hover:bg-transparent">
                  <TableHead className="text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Client</TableHead>
                  <TableHead className="text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Date & Time</TableHead>
                  <TableHead className="text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Status</TableHead>
                  <TableHead className="text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Payment</TableHead>
                  <TableHead className="text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Meet Link</TableHead>
                  <TableHead className="text-right text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-white/40 text-sm">
                      No bookings found matching your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBookings.map((booking) => (
                    <TableRow key={booking._id} className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <TableCell className="py-5 px-6">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-white/90">{booking.name}</span>
                          <span className="text-sm text-white/40">{booking.email}</span>
                          <span className="text-sm text-white/40">{booking.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-5 px-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-white/80">
                            {new Date(booking.startTime).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-sm text-white/40">
                            {new Date(booking.startTime).toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-5 px-6">
                        {booking.status === "confirmed" ? (
                          <span className="inline-flex items-center rounded-full bg-[#166534]/30 border border-[#22c55e]/30 px-3 py-1 text-xs font-medium text-[#4ade80]">
                            Confirmed
                          </span>
                        ) : booking.status === "cancelled" ? (
                          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/40">
                            Cancelled
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-[#f3b400]/10 border border-[#f3b400]/20 px-3 py-1 text-xs font-medium text-[#f3b400]">
                            Reserved
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-5 px-6">
                        {booking.paymentStatus === "paid" ? (
                          <span className="inline-flex items-center rounded-full bg-[#1e3a8a]/30 border border-[#3b82f6]/30 px-3 py-1 text-xs font-medium text-[#60a5fa]">
                            Paid
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/40">
                            Pending
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-5 px-6">
                        {booking.meetLink ? (
                          <a
                            href={booking.meetLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#3b82f6] text-sm hover:text-[#60a5fa] hover:underline"
                          >
                            Join Meet
                          </a>
                        ) : (
                          <span className="text-white/20 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell className="py-5 px-6 text-right">
                        {booking.status !== "cancelled" && (
                          <div className="flex items-center justify-end gap-3">
                            <button
                              onClick={() => {
                                setRescheduleModal({ open: true, booking });
                                const d = new Date(booking.startTime);
                                if (d > new Date()) {
                                  setSelectedDate(d);
                                } else {
                                  setSelectedDate(new Date());
                                }
                                setSelectedSlot(null);
                              }}
                              className="h-[40px] min-w-[110px] rounded-xl border border-white/20 bg-transparent px-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                            >
                              Reschedule
                            </button>
                            <button
                              onClick={() => handleCancel(booking._id)}
                              className="h-[40px] min-w-[110px] rounded-xl bg-red-500/10 border border-transparent text-red-500 px-4 text-sm font-medium hover:bg-red-500 hover:text-white transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/* Reschedule Modal */}
      {rescheduleModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#05132d] border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl relative">
            <h3 className="text-xl font-bold mb-2 text-white">Reschedule Booking</h3>
            <p className="text-sm text-white/60 mb-6">
              Pick a new date and time for {rescheduleModal.booking?.name}.
            </p>
            <div className="space-y-6">
              <div className="booking-section">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">New Date</label>
                <div className="date-selector-grid" style={{ maxHeight: "120px" }}>
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
                      style={{ padding: "8px 4px", flex: "0 0 60px" }}
                    >
                      <span className="date-btn-day">
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </span>
                      <span className="date-btn-num text-lg">{date.getDate()}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="booking-section">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">New Time</label>
                {loadingSlots ? (
                  <div className="text-sm text-white/50 animate-pulse">Loading slots...</div>
                ) : (
                  <div className="slot-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}>
                    {slots.map((slot, i) => (
                      <button
                        key={i}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`slot-btn ${selectedSlot === slot.time ? "active" : ""}`}
                        style={{ padding: "8px 6px", fontSize: "0.8rem" }}
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
            <div className="flex justify-end gap-3 mt-8">
              <button
                className="h-[40px] rounded-xl px-4 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setRescheduleModal({ open: false, booking: null })}
              >
                Go Back
              </button>
              <button 
                className="h-[40px] rounded-xl px-6 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors" 
                onClick={handleReschedule}
              >
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
