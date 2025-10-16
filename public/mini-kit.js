// mini-kit.js (versión mínima compatible con Farcaster Mini Apps)
(function() {
  window.MiniKit = class {
    constructor() {
      console.log("🧩 MiniKit mock inicializado");
      this.actions = {
        ready: () => console.log("✅ sdk.actions.ready() llamado correctamente"),
        openUrl: (url) => {
          console.log("🔗 openUrl:", url);
          window.open(url, "_blank");
        }
      };
    }
  };
})();
