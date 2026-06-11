import { Resend } from "resend";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not defined in environment variables.");
    return null;
  }
  return new Resend(apiKey);
};

interface SendBookingConfirmationParams {
  name: string;
  email: string;
  dateStr: string;
  timeStr: string;
  meetLink?: string;
  bookingId?: string;
}

export async function sendBookingConfirmationEmail({
  name,
  email,
  dateStr,
  timeStr,
  meetLink,
  bookingId,
}: SendBookingConfirmationParams) {
  try {
    const resend = getResend();
    if (!resend) {
      console.warn("Skipping email send due to missing Resend API key.");
      return;
    }

    // Use the verified domain from environment variables, or fallback to onboarding for testing
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Varun Sanduja Bookings <onboarding@resend.dev>";
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: email, 
      subject: "Demo Booking Confirmed - Varun Sanduja",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #010a1f; color: #ffffff; padding: 40px 20px; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #05132d; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <div style="margin-bottom: 24px;">
              <span style="display: inline-block; background-color: rgba(34, 197, 94, 0.1); color: #4ade80; padding: 12px 24px; border-radius: 50px; border: 1px solid rgba(34, 197, 94, 0.2); font-weight: bold; font-size: 16px;">
                ✓ Demo Booked
              </span>
            </div>

            <h1 style="color: #ffffff; font-size: 28px; margin-bottom: 20px; font-weight: 700;">Hi ${name},</h1>
            <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Thank you for booking a 1-on-1 demo with Varun Sanduja. Your slot has been successfully reserved and we can't wait to meet you.
            </p>
            
            <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 24px; margin-bottom: 30px; text-align: left;">
              <p style="margin: 0 0 12px 0; font-size: 15px;">
                <span style="color: #94a3b8; display: inline-block; width: 60px;">Date:</span> 
                <strong style="color: #ffffff;">${dateStr}</strong>
              </p>
              <p style="margin: 0 0 ${meetLink ? '12px' : '0'} 0; font-size: 15px;">
                <span style="color: #94a3b8; display: inline-block; width: 60px;">Time:</span> 
                <strong style="color: #ffffff;">${timeStr}</strong>
              </p>
              ${
                meetLink
                  ? `<p style="margin: 0; font-size: 15px;">
                      <span style="color: #94a3b8; display: inline-block; width: 60px;">Link:</span> 
                      <a href="${meetLink}" style="color: #f3b400; font-weight: bold; text-decoration: none;">Join Google Meet →</a>
                     </p>`
                  : ""
              }
            </div>
            
            <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Please be on time. We look forward to seeing you!
            </p>

            ${
              bookingId
                ? `<div style="margin-bottom: 30px; padding: 20px; background-color: rgba(243, 180, 0, 0.05); border-radius: 12px; border: 1px dashed rgba(243, 180, 0, 0.2);">
                    <p style="color: #cbd5e1; font-size: 14px; margin-bottom: 12px;">Need to change your time?</p>
                    <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reschedule/${bookingId}" style="display: inline-block; background-color: #f3b400; color: #000; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">Reschedule Session</a>
                   </div>`
                : ""
            }

            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; color: #64748b; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #f3b400;">The Varun Sanduja Team</strong>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return;
    }

    return data;
  } catch (error) {
    console.error("Error sending booking confirmation email:", error);
  }
}

export async function sendRescheduleConfirmationEmail({
  name,
  email,
  dateStr,
  timeStr,
  meetLink,
}: SendBookingConfirmationParams) {
  try {
    const resend = getResend();
    if (!resend) return;

    const fromEmail = process.env.RESEND_FROM_EMAIL || "Varun Sanduja Bookings <onboarding@resend.dev>";
    
    await resend.emails.send({
      from: fromEmail,
      to: email, 
      subject: "Demo Booking Rescheduled - Varun Sanduja",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #010a1f; color: #ffffff; padding: 40px 20px; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #05132d; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="margin-bottom: 24px;">
              <span style="display: inline-block; background-color: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 12px 24px; border-radius: 50px; border: 1px solid rgba(59, 130, 246, 0.2); font-weight: bold; font-size: 16px;">
                🔄 Session Rescheduled
              </span>
            </div>
            <h1 style="color: #ffffff; font-size: 28px; margin-bottom: 20px; font-weight: 700;">Hi ${name},</h1>
            <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Your 1-on-1 demo with Varun Sanduja has been successfully rescheduled. Please note the new date and time below.
            </p>
            <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 24px; margin-bottom: 30px; text-align: left;">
              <p style="margin: 0 0 12px 0; font-size: 15px;">
                <span style="color: #94a3b8; display: inline-block; width: 60px;">New Date:</span> 
                <strong style="color: #ffffff;">${dateStr}</strong>
              </p>
              <p style="margin: 0 0 ${meetLink ? '12px' : '0'} 0; font-size: 15px;">
                <span style="color: #94a3b8; display: inline-block; width: 60px;">New Time:</span> 
                <strong style="color: #ffffff;">${timeStr}</strong>
              </p>
              ${meetLink ? `<p style="margin: 0; font-size: 15px;"><span style="color: #94a3b8; display: inline-block; width: 60px;">Link:</span> <a href="${meetLink}" style="color: #f3b400; font-weight: bold; text-decoration: none;">Join Google Meet →</a></p>` : ""}
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; color: #64748b; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #f3b400;">The Varun Sanduja Team</strong>
            </div>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending reschedule confirmation email:", error);
  }
}
