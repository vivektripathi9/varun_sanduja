import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Fetch all bookings sorted by newest first
    const bookings = await Booking.find().sort({ createdAt: -1 });
    
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
