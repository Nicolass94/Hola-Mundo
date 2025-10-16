"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@farcaster/mini-kit@latest/dist/mini-kit.umd.js";
    script.async = true;

    script.onload = () => {
      console.log("📦 MiniKit cargado");

      const interval = setInterval(() => {
        const sdk =
          (window as any).sdk ||
          (window as any).farcaster ||
          (window as any).miniKit;

        console.log("🔍 Buscando SDK...", sdk);

        if (sdk?.actions?.ready) {
          sdk.actions.ready();
          console.log("✅ MiniKit inicializado correctamente");
          clearInterval(interval);
        }
      }, 1000); // Espera 1 segundo entre cada intento
    };

    script.onerror = () => {
      console.error("❌ Error al cargar MiniKit");
    };

    document.body.appendChild(script);
  }, []);

  const handleClick = () => {
    const sdk =
      (window as any).sdk ||
      (window as any).farcaster ||
      (window as any).miniKit;

    if (sdk?.actions?.openUrl) {
      sdk.actions.openUrl("https://warpcast.com");
    } else {
      alert("⚠️ SDK aún no disponible");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">👋 Hola Mundo</h1>
      <p className="mb-8 text-gray-700">Mini App de prueba en Farcaster</p>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Abrir Warpcast
      </button>
    </main>
  );
}

