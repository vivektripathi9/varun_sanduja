import { NextResponse } from "next/server";
import crypto from "crypto";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";
import { createMeetEvent } from "@/lib/google-calendar";
import { sendBookingConfirmationEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      throw new Error("RAZORPAY_KEY_SECRET is not defined");
    }

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Find the booking with this order ID and update it
    const booking = await Booking.findOne({ razorpayOrderId: razorpay_order_id });
    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found for this order ID" },
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
    booking.razorpayPaymentId = razorpay_payment_id;
    await booking.save();

    // Send Confirmation Email
    const dateStr = new Date(booking.startTime).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeStr = booking.startTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
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
      { message: "Payment verified successfully", meetLink },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
