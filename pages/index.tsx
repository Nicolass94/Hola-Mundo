import { useState } from "react";

export default function Home() {
  const [mensaje, setMensaje] = useState("Hola Mundo desde mi MiniApp 🚀");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mensaje}</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => setMensaje("¡Has hecho clic en el botón! 🎉")}
      >
        Hacer clic
      </button>
    </div>
  );
}