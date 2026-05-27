"use client";

import { useEffect, useState } from "react";

/* ── Set your target webinar date here ── */
const WEBINAR_DATE = new Date("2026-06-15T18:00:00+05:30");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = Math.max(WEBINAR_DATE.getTime() - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function WebinarCountdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  /* Render placeholder during SSR to avoid hydration mismatch */
  const d = time ? pad(time.days) : "--";
  const h = time ? pad(time.hours) : "--";
  const m = time ? pad(time.minutes) : "--";
  const s = time ? pad(time.seconds) : "--";

  return (
    <section className="webinar-strip">
      <div className="webinar-strip-inner">
        {/* Label */}
        <div className="webinar-strip-label">
          <span className="webinar-strip-label-top">Next</span>
          <span className="webinar-strip-label-bottom">Webinar</span>
        </div>

        {/* Separator */}
        <div className="webinar-strip-sep" aria-hidden="true" />

        {/* Countdown */}
        <div className="webinar-strip-timer">
          <div className="timer-unit">
            <span className="timer-value">{d}</span>
            <span className="timer-label">Days</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-unit">
            <span className="timer-value">{h}</span>
            <span className="timer-label">Hours</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-unit">
            <span className="timer-value">{m}</span>
            <span className="timer-label">Minutes</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-unit">
            <span className="timer-value">{s}</span>
            <span className="timer-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
