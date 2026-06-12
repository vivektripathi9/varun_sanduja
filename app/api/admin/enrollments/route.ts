import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Enrollment from "@/models/Enrollment";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Fetch all enrollments sorted by newest first
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    
    return NextResponse.json({ enrollments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return NextResponse.json(
      { error: "Failed to fetch enrollments" },
      { status: 500 }
    );
  }
}
