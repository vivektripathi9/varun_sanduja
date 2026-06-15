import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";
import { createMeetEvent } from "@/lib/google-calendar";
import { sendBookingConfirmationEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { bookingId, secret } = await request.json();

    if (!bookingId || !secret) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Hardcoded secret for the bypass
    if (secret !== "VARUN_SECRET_BYPASS_2026") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Generate Google Meet Link
    const { eventId, meetLink } = await createMeetEvent({
      name: booking.name,
      email: booking.email,
      startTime: booking.startTime,
      endTime: booking.endTime,
    });

    if (eventId || meetLink) {
      booking.googleEventId = eventId;
      booking.meetLink = meetLink;
    }

    booking.paymentStatus = "paid";
    booking.status = "confirmed";
    booking.razorpayPaymentId = "bypass_" + Date.now();
    await booking.save();

    // Send Confirmation Email
    const userTimezone = booking.timezone || "Asia/Kolkata";
    const dateStr = new Date(booking.startTime).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: userTimezone,
    });
    const timeStr = booking.startTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
      timeZone: userTimezone,
    });

    await sendBookingConfirmationEmail({
      name: booking.name,
      email: booking.email,
      dateStr,
      timeStr,
      meetLink,
      bookingId: booking._id.toString(),
    });

    return NextResponse.json(
      { message: "Payment bypassed successfully", meetLink },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error bypassing payment:", error);
    return NextResponse.json(
      { error: "Failed to bypass payment" },
      { status: 500 }
    );
  }
}
