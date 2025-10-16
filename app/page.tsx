"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const loadMiniKit = () => {
      const script = document.createElement("script");
      script.src = "/mini-kit.js"; // ✅ Ahora se carga el SDK local, no desde CDN
      script.async = true;

      script.onload = () => {
        try {
          const sdk = new (window as any).MiniKit();
          (window as any).sdk = sdk;
          console.log("✅ MiniKit cargado correctamente");
          sdk.actions.ready();
          console.log("🟢 SDK listo y registrado correctamente");
        } catch (err) {
          console.error("⚠️ Error inicializando MiniKit:", err);
        }
      };

      script.onerror = () => {
        console.error("❌ Error al cargar MiniKit desde /mini-kit.js");
      };

      document.body.appendChild(script);
    };

    loadMiniKit();
  }, []);

  const handleClick = () => {
    const sdk = (window as any).sdk;
    if (sdk?.actions) {
      sdk.actions.openUrl("https://warpcast.com");
    } else {
      alert("⚠️ SDK aún no disponible");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">👋 Hola Mundo</h1>
      <p className="mb-8">Mini App de prueba en Farcaster</p>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Abrir Warpcast
      </button>
    </main>
  );
}
