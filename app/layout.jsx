"use client";
import "@styles/globals.css";
import Nav from "@components/Nav";
import { RecoilRoot } from "recoil";
import { metadata } from "./metadata";
import "../i18n/i18n";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Service Worker Registration
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("✅ Service Worker Registered"))
        .catch((err) =>
          console.error("❌ Service Worker Registration Failed:", err)
        );
    } else {
      console.error("❌ Service Worker is not supported in this browser");
    }
  }, []);

  useEffect(() => {
    // Debugging beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      console.log("✅ beforeinstallprompt event fired!");
      e.preventDefault(); // Prevent the default prompt
      window.deferredPrompt = e; // Save the event for later
      setTimeout(() => {
        console.log("✅ Showing Install App button after 5 seconds");
        setShowPrompt(true); // Show the button
      }, 5000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Log if the browser doesn't fire beforeinstallprompt
    window.addEventListener("appinstalled", () => {
      console.log("✅ App successfully installed");
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallPrompt = () => {
    if (window.deferredPrompt) {
      console.log("✅ Install prompt triggered");
      window.deferredPrompt.prompt(); // Show the install prompt
      window.deferredPrompt.userChoice.then((choiceResult) => {
        console.log("✅ User choice:", choiceResult.outcome);
        if (choiceResult.outcome === "accepted") {
          console.log("🎉 User accepted the install prompt");
        } else {
          console.log("❌ User dismissed the install prompt");
        }
        window.deferredPrompt = null; // Reset the prompt
        setShowPrompt(false); // Hide the button
      });
    } else {
      console.error("❌ No deferredPrompt found");
    }
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

            {/* Add the Install App Button */}
            {showPrompt && (
              <div
                className="fixed bottom-5 right-5 bg-red-500 text-white py-2 px-4 rounded shadow-md cursor-pointer hover:bg-red-600 transition"
                onClick={handleInstallPrompt}
              >
                Install App
              </div>
            )}
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
