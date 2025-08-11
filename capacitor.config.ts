import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.capvitetron",
  appName: "CapViteTron App",
  webDir: "dist",
  plugins: {
    StatusBar: {
      style: "DARK",
      backgroundColor: "#1a1a1a",
      overlaysWebView: false,
    },
  },
};

export default config;
