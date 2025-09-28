export default function Page() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Hola Mundo!</h1>
      <button onClick={() => alert("¡Botón funcionando!")}>
        Haz clic aquí
      </button>
    </main>
  );
}
