import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time } = body;

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const startTime = new Date(time);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour duration

    // Check if slot is already fully booked and confirmed
    const existingBooking = await Booking.findOne({
      startTime,
      status: "confirmed",
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "This slot is no longer available" },
        { status: 409 }
      );
    }

    // Set expiration for reservation (e.g., 15 minutes to complete payment if added later)
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    // Create reservation for Razorpay payment
    const newBooking = await Booking.create({
      name,
      email,
      phone,
      startTime,
      endTime,
      expiresAt,
      status: "reserved",
      paymentStatus: "pending",
    });

    return NextResponse.json(
      { 
        message: "Booking reserved successfully", 
        bookingId: newBooking._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
