import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    image: "https://hola-mundo-mu.vercel.app/hero.png",
    buttons: [
      { label: "Hola 👋", action: "post" },
      { label: "Seguir ➡️", action: "post" }
    ],
    post_url: "https://hola-mundo-mu.vercel.app/api/frame/next"
  });
}
