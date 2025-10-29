import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    image: "https://hola-mundo-mu.vercel.app/splash.png",
    buttons: [
      { label: "Volver 🔙", action: "post" }
    ],
    post_url: "https://hola-mundo-mu.vercel.app/api/frame"
  });
}
