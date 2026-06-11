import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";
import { updateMeetEvent } from "@/lib/google-calendar";
import { sendRescheduleConfirmationEmail } from "@/lib/resend";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { time } = await request.json();
    
    if (!time) {
      return NextResponse.json({ error: "Missing time field" }, { status: 400 });
    }

    const { id } = await params;
    await connectToDatabase();

    const booking = await Booking.findById(id);
    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    if (booking.status === "cancelled") {
      return NextResponse.json({ error: "Cannot reschedule a cancelled booking" }, { status: 400 });
    }

    const newStartTime = new Date(time);
    const newEndTime = new Date(newStartTime.getTime() + 60 * 60 * 1000);

    // Check if slot is already fully booked and confirmed
    const existingBooking = await Booking.findOne({
      _id: { $ne: booking._id },
      startTime: newStartTime,
      status: "confirmed",
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "This slot is no longer available" },
        { status: 409 }
      );
    }

    // Update MongoDB
    booking.startTime = newStartTime;
    booking.endTime = newEndTime;
    await booking.save();

    // Update Google Calendar if event exists
    if (booking.googleEventId) {
      await updateMeetEvent({
        eventId: booking.googleEventId,
        startTime: newStartTime,
        endTime: newEndTime,
      });
    }

    // Send Confirmation Email
    const dateStr = newStartTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeStr = newStartTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    await sendRescheduleConfirmationEmail({
      name: booking.name,
      email: booking.email,
      dateStr,
      timeStr,
      meetLink: booking.meetLink,
    });

    return NextResponse.json({ message: "Booking rescheduled successfully", booking }, { status: 200 });
  } catch (error) {
    console.error("Error rescheduling booking:", error);
    return NextResponse.json(
      { error: "Failed to reschedule" },
      { status: 500 }
    );
  }
}
