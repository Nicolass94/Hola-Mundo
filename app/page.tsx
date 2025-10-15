"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Evitar cargar MiniKit más de una vez
    if (document.getElementById("mini-kit-script")) return;

    const script = document.createElement("script");
    script.id = "mini-kit-script";
    script.src =
      "https://cdn.jsdelivr.net/npm/@farcaster/mini-kit@latest/dist/mini-kit.umd.js";
    script.async = true;

    script.onload = () => {
      console.log("📦 MiniKit cargado");
      const checkReady = setInterval(() => {
        const sdk = (window as any).sdk;
        if (sdk?.actions) {
          sdk.actions.ready();
          console.log("✅ MiniKit inicializado correctamente");
          clearInterval(checkReady);
        }
      }, 300);
    };

    script.onerror = () => {
      console.error("❌ Error al cargar MiniKit");
    };

    document.body.appendChild(script);
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
