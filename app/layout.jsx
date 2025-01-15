"use client";

import "@styles/globals.css";
import Nav from "@components/Nav";
import { RecoilRoot } from "recoil";
import { metadata } from "./metadata";
import "../i18n/i18n";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        console.log("✅ Service Worker Registered");

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;

          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (
                installingWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                console.log("⚠️ New update available!");
                setIsUpdateAvailable(true);
              }
            };
          }
        };
      });
    }
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <RecoilRoot>
          <main className="app">
            <Nav />
            {children}
            {isUpdateAvailable && (
              <div
                className="fixed bottom-5 right-5 bg-red-500 text-white py-2 px-4 rounded shadow-md cursor-pointer hover:bg-red-600 transition"
                onClick={reloadPage}
              >
                Update Available - Refresh
              </div>
            )}
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
