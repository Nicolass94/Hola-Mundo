"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Cargar el script de MiniKit solo si no está cargado
    if (!document.getElementById("minikit-script")) {
      const script = document.createElement("script");
      script.id = "minikit-script";
      script.src = "https://unpkg.com/@farcaster/mini-kit@latest/dist/index.js";
      script.async = true;
      script.onload = () => {
        if (window.sdk) {
          window.sdk.actions.ready();
          console.log("✅ MiniKit inicializado correctamente");
        }
      };
      document.body.appendChild(script);
    } else if (window.sdk) {
      window.sdk.actions.ready();
    }
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

