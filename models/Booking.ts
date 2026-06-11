import mongoose, { Schema, model, models } from "mongoose";

export interface IBooking {
  name: string;
  email: string;
  phone: string;
  startTime: Date;
  endTime: Date;
  status: "reserved" | "confirmed" | "cancelled";
  paymentStatus: "pending" | "paid";
  expiresAt: Date;
  meetLink?: string;
  googleEventId?: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["reserved", "confirmed", "cancelled"],
      default: "reserved",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    expiresAt: { type: Date, required: true },
    meetLink: { type: String },
    googleEventId: { type: String },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
  },
  {
    timestamps: true,
  }
);

// Optional: Add index for querying available slots efficiently
bookingSchema.index({ startTime: 1, endTime: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ razorpayOrderId: 1 });

const Booking = models.Booking || model<IBooking>("Booking", bookingSchema);

export default Booking;
