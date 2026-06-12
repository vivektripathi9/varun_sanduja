import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Enrollment from "@/models/Enrollment";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, grade, city, planType, includeKit = true } = body;

    if (!name || !email || !mobile || !grade || !city || !planType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (planType !== "standard" && planType !== "premium") {
      return NextResponse.json(
        { error: "Invalid plan type" },
        { status: 400 }
      );
    }

    let basePrice = planType === "standard" ? 12998 : 15998;
    if (!includeKit) {
      basePrice -= 2999;
    }
    const gstAmount = Math.round(basePrice * 0.18);
    const totalAmount = basePrice + gstAmount;

    await connectToDatabase();

    // Create a new enrollment record
    const enrollment = new Enrollment({
      name,
      email,
      mobile,
      grade,
      city,
      planType,
      includeKit,
      basePrice,
      gstAmount,
      totalAmount,
      paymentStatus: "pending",
    });

    await enrollment.save();

    // Create a Razorpay order
    // amount is in paise
    const options = {
      amount: totalAmount * 100,
      currency: "INR",
      receipt: enrollment._id.toString(),
    };

    const order = await razorpay.orders.create(options);

    // Save the order ID to the enrollment document
    enrollment.razorpayOrderId = order.id;
    await enrollment.save();

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      enrollmentId: enrollment._id,
    }, { status: 200 });

  } catch (error) {
    console.error("Error creating enrollment order:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
