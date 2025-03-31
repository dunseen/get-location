import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  // Tenta pegar o IP do cabeçalho ou da conexão direta
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0] || "IP desconhecido";

  console.log("📍 Geolocalização do usuário recebida:");
  console.log({
    ...data,
    ip,
  });

  return NextResponse.json({ ok: true });
}
