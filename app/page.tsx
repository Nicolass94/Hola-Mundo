"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Intentamos cargar el SDK dinámicamente solo si está disponible
    const initFarcaster = async () => {
      try {
        const { sdk } = await import("@farcaster/mini-kit");
        sdk.actions.ready();
        console.log("Farcaster Mini Kit initialized");
      } catch (err) {
        console.warn("Farcaster SDK not found — running in web preview mode");
      }
    };

    initFarcaster();
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
