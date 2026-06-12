import mongoose, { Schema, model, models } from "mongoose";

export interface IEnrollment {
  name: string;
  email: string;
  mobile: string;
  grade: string;
  city: string;
  planType: "standard" | "premium";
  includeKit: boolean;
  basePrice: number;
  gstAmount: number;
  totalAmount: number;
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
    planType: {
      type: String,
      enum: ["standard", "premium"],
      required: true,
    },
    includeKit: { type: Boolean, default: true },
    basePrice: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
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
