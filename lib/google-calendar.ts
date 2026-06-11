import { google } from "googleapis";

const getAuth = () => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    console.warn("Google credentials not found in environment variables.");
    return null;
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/calendar.events"],
  });
};

interface CreateMeetEventParams {
  name: string;
  email: string;
  startTime: Date;
  endTime: Date;
}

export async function createMeetEvent({
  name,
  email,
  startTime,
  endTime,
}: CreateMeetEventParams) {
  try {
    const auth = getAuth();
    if (!auth) {
      console.warn("Skipping Google Calendar event creation due to missing credentials.");
      return { eventId: undefined, meetLink: undefined };
    }

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

    const response = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `Demo Booking: ${name}`,
        description: `1-on-1 Demo session booked by ${name} (${email}).\n\nGoogle Meet Link: https://meet.google.com/ywv-bukm-kyo`,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Asia/Kolkata", 
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
      },
    });

    const eventId = response.data.id;
    const meetLink = "https://meet.google.com/ywv-bukm-kyo";

    return { eventId: eventId || undefined, meetLink };
  } catch (error) {
    console.error("Error creating Google Calendar event:", error);
    // Return the static meet link even if calendar insertion fails
    return { eventId: undefined, meetLink: "https://meet.google.com/ywv-bukm-kyo" };
  }
}

export async function updateMeetEvent({
  eventId,
  startTime,
  endTime,
}: {
  eventId: string;
  startTime: Date;
  endTime: Date;
}) {
  try {
    const auth = getAuth();
    if (!auth) {
      console.warn("Skipping Google Calendar event update due to missing credentials.");
      return false;
    }

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

    await calendar.events.patch({
      calendarId,
      eventId,
      requestBody: {
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
      },
    });

    return true;
  } catch (error) {
    console.error("Error updating Google Calendar event:", error);
    return false;
  }
}
