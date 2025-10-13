"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/mini-kit";

export default function Page() {
  // Llamamos a sdk.actions.ready() cuando la app está lista
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleClick = () => {
    alert("¡Hola mundo desde Next.js en Vercel!");
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Hola Mundo 👋</h1>
      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#0070f3",
          color: "white",
          cursor: "pointer",
        }}
      >
        Hacé click acá
      </button>
    </main>
  );
}
