const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL || "https://tu-dominio.com";

export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: "HolaMundoApp",
    subtitle: "Una miniapp de prueba",
    description: "MiniApp Hola Mundo interactiva en Base",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#FFFFFF",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["hola", "mundo", "miniapp"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Hola Mundo interactivo",
    ogTitle: "Hola Mundo App",
    ogDescription: "Una miniapp de ejemplo en Base",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;