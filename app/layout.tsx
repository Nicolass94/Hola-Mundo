// app/layout.tsx
import React from "react";

export const metadata = {
  title: "Hola Mundo MiniApp",
  description: "Miniapp de prueba en Base",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
