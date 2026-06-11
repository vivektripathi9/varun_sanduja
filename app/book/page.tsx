"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock Data
const MOCK_SLOTS = [
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false }, // Taken
  { time: "12:00 PM", available: true },
  { time: "01:00 PM", available: true },
  { time: "02:00 PM", available: false }, // Taken
  { time: "03:00 PM", available: true },
  { time: "04:00 PM", available: true },
];

export default function BookConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Generate next 7 days for the mock date picker
  const nextDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-[#021a4a] to-[#010a1f] relative overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-0" 
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[radial-gradient(circle,rgba(15,143,255,0.15)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg">
        <Card className="shadow-2xl border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Schedule a Session
            </CardTitle>
            <CardDescription className="text-white/70 text-sm md:text-base">
              Choose a date and time for your personalized education consultation.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 pt-4">
            
            {/* Date Picker Section */}
            <div className="space-y-3">
              <Label className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                1. Select Date
              </Label>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
                {nextDays.map((date) => {
                  const isActive = selectedDate.getDate() === date.getDate();
                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedSlot(null); // Reset slot on date change
                      }}
                      className={`snap-center flex-shrink-0 flex flex-col items-center justify-center min-w-[70px] p-3 rounded-xl border transition-all duration-300 ease-out ${
                        isActive 
                          ? "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] text-white scale-105" 
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs uppercase font-medium mb-1">
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </span>
                      <span className="text-xl font-bold">
                        {date.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Section */}
            <div className="space-y-3">
              <Label className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                2. Select Time
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {MOCK_SLOTS.map((slot, i) => {
                  const isActive = selectedSlot === slot.time;
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                        !slot.available 
                          ? "opacity-20 bg-black/30 border-white/5 text-white/50 cursor-not-allowed line-through" 
                          : isActive 
                            ? "bg-[#f3b400] border-[#f3b400] text-black shadow-[0_0_15px_rgba(243,180,0,0.4)] scale-[1.02]" 
                            : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Section (Mock) */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-black/20 border-white/10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-black/20 border-white/10" />
              </div>
            </div>

            {/* CTA */}
            <Button 
              className="w-full h-12 text-base font-semibold mt-4 rounded-xl shadow-lg transition-transform active:scale-95"
              disabled={!selectedSlot}
              onClick={() => alert(`Mock booking confirmed for ${selectedDate.toDateString()} at ${selectedSlot}`)}
            >
              {selectedSlot ? `Confirm ${selectedSlot} Session` : "Select a Time Slot"}
            </Button>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
