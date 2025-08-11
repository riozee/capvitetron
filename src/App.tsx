import { useState, useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import "./App.css";

// Platform detection utility
const getPlatformInfo = () => {
  const platform = Capacitor.getPlatform();
  const isNative = Capacitor.isNativePlatform();
  const isWeb = platform === "web";
  const isElectron =
    !isNative &&
    !isWeb &&
    typeof window !== "undefined" &&
    "process" in window &&
    (window as { process?: { type?: string } }).process?.type === "renderer";

  return {
    platform,
    isNative,
    isWeb,
    isElectron,
    isAndroid: platform === "android",
    isIOS: platform === "ios",
    isDesktop: isElectron || (!isNative && !isWeb),
  };
};

function App() {
  const [count, setCount] = useState(0);
  const platformInfo = getPlatformInfo();

  useEffect(() => {
    // Set status bar style for mobile platforms
    if (platformInfo.isNative) {
      StatusBar.setStyle({ style: Style.Dark });
    }
  }, [platformInfo.isNative]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>CapViteTron</h1>
        <p className="platform-info">
          Running on: <strong>{platformInfo.platform}</strong>
          {platformInfo.isElectron && " (Electron)"}
          {platformInfo.isWeb && " (Browser)"}
        </p>
      </header>

      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <div className="platform-features">
          <h2>Platform Features</h2>
          <ul>
            <li>✅ Cross-platform React app</li>
            <li>✅ Hot module replacement</li>
            <li>✅ TypeScript support</li>
            <li>✅ Platform detection</li>
            {platformInfo.isNative && <li>✅ Native mobile features</li>}
            {platformInfo.isElectron && <li>✅ Desktop app features</li>}
            {platformInfo.isWeb && <li>✅ Progressive web app</li>}
          </ul>
        </div>

        <div className="build-info">
          <h3>Available Builds</h3>
          <ul>
            <li>
              <strong>Web:</strong> npm run dev
            </li>
            <li>
              <strong>Android:</strong> npm run build:android
            </li>
            <li>
              <strong>Desktop:</strong> npm run build:desktop
            </li>
            <li>
              <strong>All platforms:</strong> npm run build:all
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
