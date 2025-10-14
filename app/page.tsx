"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const initMiniKit = async () => {
      try {
        const { sdk } = await import(
          "https://unpkg.com/@farcaster/mini-kit@latest/dist/index.js"
        );
        sdk.actions.ready();
        console.log("✅ MiniKit initialized correctamente");
      } catch (err) {
        console.warn("MiniKit no se pudo cargar (posiblemente fuera de Warpcast):", err);
      }
    };

    initMiniKit();
  }, []);

  const handleClick = () => {
    alert("¡Hola mundo desde Next.js en Vercel y Farcaster!");
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

