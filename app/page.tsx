"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [sdkStatus, setSdkStatus] = useState("Cargando SDK...");

  useEffect(() => {
    const loadMiniKit = async () => {
      try {
        // Evita recargar el SDK si ya existe
        if (document.getElementById("minikit-sdk")) {
          console.log("⚙️ SDK ya cargado anteriormente");
          return;
        }

        const script = document.createElement("script");
        script.id = "minikit-sdk";
        script.src = "https://cdn.jsdelivr.net/npm/@farcaster/mini-kit@latest/dist/browser.js";
        script.async = true;

        script.onload = () => {
          console.log("✅ MiniKit cargado correctamente desde CDN");

          // @ts-ignore
          if (window?.MiniKit) {
            const sdk = new (window as any).MiniKit();
            (window as any).sdk = sdk;

            // Confirmar si estamos dentro del entorno Farcaster
            const isInFarcaster = !!window.location.href.includes("farcaster");
            console.log(`🌐 Entorno Farcaster: ${isInFarcaster ? "Sí" : "No"}`);

            if (sdk.actions && sdk.actions.ready) {
              sdk.actions.ready();
              console.log("🟢 SDK listo y registrado correctamente");
              setSdkStatus("✅ SDK inicializado correctamente");
            } else {
              console.warn("⚠️ SDK cargado pero sin método ready()");
              setSdkStatus("⚠️ SDK sin método ready()");
            }
          } else {
            console.error("❌ No se encontró MiniKit en window");
            setSdkStatus("❌ No se encontró MiniKit en window");
          }
        };

        script.onerror = () => {
          console.error("❌ Error al cargar MiniKit desde CDN");
          setSdkStatus("❌ Error al cargar MiniKit desde CDN");
        };

        document.body.appendChild(script);
      } catch (err) {
        console.error("⚠️ Error general al cargar MiniKit:", err);
        setSdkStatus("⚠️ Error general al cargar MiniKit");
      }
    };

    loadMiniKit();
  }, []);

  const handleClick = () => {
    const sdk = (window as any).sdk;
    if (sdk && sdk.actions) {
      sdk.actions.openUrl("https://warpcast.com");
    } else {
      alert("⚠️ SDK aún no disponible");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">👋 Hola Mundo</h1>
      <p className="mb-4">Mini App de prueba en Farcaster</p>
      <p className="text-sm mb-8 opacity-75">{sdkStatus}</p>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Abrir Warpcast
      </button>
    </main>
  );
}


