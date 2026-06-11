import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { startTime, endTime } = await request.json();
    
    if (!startTime || !endTime) {
      return NextResponse.json({ error: "Missing time fields" }, { status: 400 });
    }

    await connectToDatabase();
    
    const { id } = await params;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { startTime: new Date(startTime), endTime: new Date(endTime) },
      { new: true }
    );

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    if (booking.googleEventId) {
      const { updateMeetEvent } = await import("@/lib/google-calendar");
      await updateMeetEvent({
        eventId: booking.googleEventId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      });
    }

    return NextResponse.json({ booking }, { status: 200 });
  } catch (error) {
    console.error("Error rescheduling booking:", error);
    return NextResponse.json(
      { error: "Failed to reschedule" },
      { status: 500 }
    );
  }
}
