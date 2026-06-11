import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

// Predefined available times (e.g., 10 AM to 5 PM)
const SLOTS_HOURS = [10, 11, 12, 13, 14, 15, 16, 17];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get("date");

    if (!dateParam) {
      return NextResponse.json(
        { error: "Date parameter is required (YYYY-MM-DD)" },
        { status: 400 }
      );
    }

    const date = new Date(dateParam);
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }

    await connectToDatabase();

    // Start and end of the requested day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch existing bookings for this date that are confirmed
    const existingBookings = await Booking.find({
      startTime: { $gte: startOfDay, $lte: endOfDay },
      status: "confirmed",
    });

    const bookedHours = existingBookings.map((b) => b.startTime.getHours());

    // Generate available slots
    const availableSlots = SLOTS_HOURS.map((hour) => {
      const slotTime = new Date(date);
      slotTime.setHours(hour, 0, 0, 0);
      return {
        time: slotTime,
        available: !bookedHours.includes(hour),
        hourStr: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`,
      };
    });

    return NextResponse.json({ slots: availableSlots });
  } catch (error: unknown) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}
