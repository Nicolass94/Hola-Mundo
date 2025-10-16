"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function loadMiniKit() {
      try {
        // Cargar el script del MiniKit
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@farcaster/mini-kit@latest/dist/mini-kit.umd.js";
        script.async = true;

        script.onload = () => {
          console.log("📦 MiniKit cargado");
          const sdk = (window as any).sdk;

          if (sdk && sdk.actions) {
            sdk.actions.ready();
            console.log("✅ sdk.actions.ready() ejecutado correctamente");
          } else {
            console.warn("⚠️ SDK no disponible todavía, reintentando...");
            const retry = setInterval(() => {
              const retrySdk = (window as any).sdk;
              if (retrySdk?.actions) {
                retrySdk.actions.ready();
                console.log("✅ SDK inicializado en reintento");
                clearInterval(retry);
              }
            }, 500);
          }
        };

        script.onerror = () => {
          console.error("❌ Error al cargar MiniKit");
        };

        document.body.appendChild(script);
      } catch (err) {
        console.error("Error cargando MiniKit:", err);
      }
    }

    loadMiniKit();
  }, []);

  const handleClick = () => {
    const sdk = (window as any).sdk;
    if (sdk?.actions?.openUrl) {
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
