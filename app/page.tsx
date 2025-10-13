"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/mini-kit";

export default function Page() {
  useEffect(() => {
    const init = async () => {
      try {
        await sdk.actions.ready();
        console.log("✅ Mini app lista para usar");
      } catch (err) {
        console.error("⚠️ Error al inicializar Farcaster SDK:", err);
      }
    };
    init();
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
