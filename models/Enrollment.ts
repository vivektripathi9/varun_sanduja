import mongoose, { Schema, model, models } from "mongoose";

export interface IEnrollment {
  name: string;
  email: string;
  mobile: string;
  grade: string;
  city: string;
  country?: string;
  planType: "standard" | "premium" | "global-group" | "global-premium";
  includeKit: boolean;
  basePrice: number;
  gstAmount: number;
  totalAmount: number;
  currency?: string;
  paymentStatus: "pending" | "paid";
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const enrollmentSchema = new Schema<IEnrollment>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    grade: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String },
    planType: {
      type: String,
      enum: ["standard", "premium", "global-group", "global-premium"],
      required: true,
    },
    includeKit: { type: Boolean, default: true },
    basePrice: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
  },
  {
    timestamps: true,
  }
);

enrollmentSchema.index({ razorpayOrderId: 1 });

const Enrollment = models.Enrollment || model<IEnrollment>("Enrollment", enrollmentSchema);

export default Enrollment;
