"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isWarpcast, setIsWarpcast] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initSDK = async () => {
      try {
        // Detectar si estamos en Warpcast
        const inWarpcast = /warpcast/i.test(navigator.userAgent);
        setIsWarpcast(inWarpcast);

        // Cargar el SDK real si estamos dentro de Warpcast
        if (inWarpcast) {
          const script = document.createElement("script");
          script.src = "https://cdn.farcaster.xyz/mini-kit/v0.0.4-alpha.3/mini-kit.js";
          script.async = true;
          script.onload = () => {
            if (window.MiniKit) {
              try {
                const kit = new window.MiniKit();
                kit.actions.ready(); // Indicar que la miniapp está lista
                setSdkReady(true);
              } catch (e) {
                console.error("Error inicializando MiniKit:", e);
                setError("Error inicializando MiniKit");
              }
            } else {
              setError("MiniKit no disponible en el entorno Warpcast");
            }
          };
          script.onerror = () => setError("Error al cargar MiniKit desde CDN");
          document.body.appendChild(script);
        } else {
          // Si no estamos en Warpcast, usamos un mock para desarrollo web
          console.warn("Entorno de desarrollo detectado: usando mock MiniKit");
          setSdkReady(true);
        }
      } catch (err) {
        console.error("Error general:", err);
        setError("Fallo al inicializar SDK");
      }
    };

    initSDK();
  }, []);

  const handleOpenWarpcast = () => {
    window.open("https://warpcast.com/~/add-cast-action?url=https://hola-mundo-mu.vercel.app", "_blank");
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>👋 Hola Mundo</h1>
      <p>Mini App de prueba en Farcaster</p>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {!error && sdkReady && <p>✅ SDK inicializado correctamente</p>}
      {!error && !sdkReady && <p>⌛ Cargando SDK...</p>}

      <button onClick={handleOpenWarpcast} style={{ marginTop: "1rem" }}>
        Abrir en Warpcast
      </button>

      <p style={{ marginTop: "1rem", color: "#666" }}>
        Entorno actual: {isWarpcast ? "🌐 Warpcast (producción)" : "💻 Web (desarrollo)"}
      </p>
    </main>
  );
}
