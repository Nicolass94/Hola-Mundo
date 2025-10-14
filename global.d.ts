// global.d.ts
export {};

declare global {
  interface Window {
    sdk: {
      actions: {
        ready: () => void;
      };
    };
  }
}
