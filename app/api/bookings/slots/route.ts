import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startStr = searchParams.get("start");
    const endStr = searchParams.get("end");

    if (!startStr || !endStr) {
      return NextResponse.json(
        { error: "Missing start or end parameters" },
        { status: 400 }
      );
    }

    const start = new Date(startStr);
    const end = new Date(endStr);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }

    await connectToDatabase();

    // Fetch existing bookings within the query window that are confirmed or reserved
    // A reserved booking means someone is currently paying, so it should block others.
    const existingBookings = await Booking.find({
      $or: [
        { startTime: { $gte: start, $lt: end } },
        { endTime: { $gt: start, $lte: end } }
      ],
      status: { $in: ["confirmed", "reserved"] },
    });

    const bookedIntervals = existingBookings.map((b) => ({
      start: b.startTime.toISOString(),
      end: b.endTime.toISOString(),
    }));

    return NextResponse.json({ bookedIntervals });
  } catch (error: unknown) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}
