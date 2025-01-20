"use client";

import "@styles/globals.css";
import Nav from "@components/Nav";
import { RecoilRoot } from "recoil";
import { metadata } from "./metadata";
import "../i18n/i18n";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

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

      // Listen for service worker messages
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data.type === "SW_ACTIVATED") {
          console.log("Service worker activated! Reloading table...");
          window.location.reload(); // Trigger page reload when SW activates
        }
      });
    }

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default browser install prompt
      setInstallPrompt(event); // Save the event to trigger it later
      setShowInstallButton(true); // Show the custom install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt(); // Show the install prompt
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("✅ User accepted the install prompt!");
        } else {
          console.log("❌ User dismissed the install prompt.");
        }
        setInstallPrompt(null); // Clear the saved prompt
        setShowInstallButton(false); // Hide the button
      });
    }
  };

  const reloadPage = () => {
    window.location.reload(); // Reload the page
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

            {/* Update Available Button */}
            {isUpdateAvailable && (
              <div
                className="fixed bottom-6 right-6 bg-red-600 text-white py-2 px-6 rounded-lg shadow-md cursor-pointer hover:bg-red-700 transition-all"
                onClick={reloadPage}
              >
                Update Available - Refresh
              </div>
            )}

            {/* Add to Home Screen Button */}
            {showInstallButton && (
              <div
                className="fixed bottom-6 left-6 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all w-fit"
                onClick={handleInstallClick}
              >
                Add to Home Screen
              </div>
            )}
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
