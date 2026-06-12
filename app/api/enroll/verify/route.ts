import { NextResponse } from "next/server";
import crypto from "crypto";
import connectToDatabase from "@/lib/db";
import Enrollment from "@/models/Enrollment";

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

    // Find the enrollment with this order ID and update it
    const enrollment = await Enrollment.findOne({ razorpayOrderId: razorpay_order_id });
    if (!enrollment) {
      return NextResponse.json(
        { error: "Enrollment not found for this order ID" },
        { status: 404 }
      );
    }

    enrollment.paymentStatus = "paid";
    enrollment.razorpayPaymentId = razorpay_payment_id;
    await enrollment.save();

    return NextResponse.json(
      { message: "Payment verified successfully" },
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
