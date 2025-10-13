"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const initFarcaster = async () => {
      try {
        // Evita que Webpack intente resolver el módulo durante el build
        const farcasterModule = require("@farcaster/mini-kit");
        const sdk = farcasterModule.sdk;
        sdk.actions.ready();
        console.log("✅ Farcaster SDK initialized");
      } catch (err) {
        console.warn("⚠️ Farcaster SDK not available — running on web preview");
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
