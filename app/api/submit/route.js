import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  // const randomStr = () => require("crypto").randomBytes(32).toString("hex");

  if (
    request.headers.get("api_route_secret") !== process.env.NEXT_PUBLIC_API_ROUTE_SECRET
  ) {
    return NextResponse.json("You are not authorized to call this API", {
      status: 401,
    });
  }
    const res = await request.json();
    console.log(res)
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });
    
    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[res.name,res.email, res.message]],
      },
    });

  return NextResponse.json({data:response}, { status: 200 });
}
