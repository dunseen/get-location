import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0] || "8.8.8.8"; // fallback

  const response = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await response.json();

  console.log("📦 Dados de localização via IP:", data);

  return NextResponse.json({ location: data });
}
