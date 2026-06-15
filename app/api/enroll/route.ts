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
    const { name, email, mobile, grade, city, country, planType, includeKit = true } = body;

    if (!name || !email || !mobile || !grade || !city || !planType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const validPlans = ["standard", "premium", "global-group", "global-premium"];
    if (!validPlans.includes(planType)) {
      return NextResponse.json(
        { error: "Invalid plan type" },
        { status: 400 }
      );
    }

    let basePrice = 0;
    let gstAmount = 0;
    let totalAmount = 0;
    let currency = "INR";

    if (planType === "global-group") {
      basePrice = 149;
      gstAmount = 0;
      totalAmount = 149;
      currency = "USD";
    } else if (planType === "global-premium") {
      basePrice = 249;
      gstAmount = 0;
      totalAmount = 249;
      currency = "USD";
    } else {
      basePrice = planType === "standard" ? 12998 : 15998;
      if (!includeKit) {
        basePrice -= 2999;
      }
      gstAmount = Math.round(basePrice * 0.18);
      totalAmount = basePrice + gstAmount;
      currency = "INR";
    }

    await connectToDatabase();

    // Create a new enrollment record
    const enrollment = new Enrollment({
      name,
      email,
      mobile,
      grade,
      city,
      country,
      planType,
      includeKit,
      basePrice,
      gstAmount,
      totalAmount,
      currency,
      paymentStatus: "pending",
    });

    await enrollment.save();

    // Create a Razorpay order
    // amount is in paise/cents
    const options = {
      amount: totalAmount * 100,
      currency: currency,
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
