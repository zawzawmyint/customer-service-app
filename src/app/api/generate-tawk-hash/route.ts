import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.TAWK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "API key not configured" },
      { status: 500 }
    );
  }

  const hash = crypto.createHmac("sha256", apiKey).update(email).digest("hex");

  return NextResponse.json({ hash }, { status: 200 });
}
