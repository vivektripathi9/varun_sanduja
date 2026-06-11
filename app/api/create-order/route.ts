import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  try {
    const { bookingId, amount } = await request.json();

    if (!bookingId || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
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

    // Create a Razorpay order
    const options = {
      amount: amount, // amount in the smallest currency unit (e.g. paise for INR)
      currency: "INR",
      receipt: bookingId,
    };

    const order = await razorpay.orders.create(options);

    // Save the order ID to the booking document
    booking.razorpayOrderId = order.id;
    await booking.save();

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    }, { status: 200 });

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
