"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    fetch("/api/log-location")
      .then((res) => {
        res.json().then((data) => {
          console.log("📦 Dados de localização via IP:", data);
        });
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar dados de localização:", err);
      });
  }, []);
  return (
    <main>
      <code>NOT FOUND</code>
    </main>
  );
}
