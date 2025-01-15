"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TradingPage = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleMouseMove = (e) => {
    if (animationComplete) {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100; // Percentage of horizontal position
      const y = (e.clientY / innerHeight) * 100; // Percentage of vertical position
      setMousePosition({ x, y });
    }
  };

  const handleAnimationEnd = () => {
    setAnimationComplete(true); // Enable parallax after Santa's animation completes
  };

  return (
    <div
      className="banner-container h-48 md:h-96 w-full relative mt-0 md:mt-6 overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      {/* Background */}
      <div
        className="background absolute inset-0 bg-cover bg-center"
        style={{
          transform: animationComplete
            ? `translate(${mousePosition.x * 0.1}px, ${
                mousePosition.y * 0.1
              }px) scale(1.1)` // Apply parallax and scale to eliminate gaps
            : "scale(1.1)", // Always scale up slightly
        }}
      ></div>

      {/* Mountains */}
      <div
        className="mountains absolute bottom-[-10px] h-[96px] md:h-[160px] lg:h-[220px] overflow-hidden"
        style={{
          width: "100vw", // Make mountains span the full width of the viewport
          transform: animationComplete
            ? `translate(${mousePosition.x * 0.2}px, ${
                mousePosition.y * 0.3
              }px) scale(1.1)` // Apply parallax and scale to eliminate gaps
            : "scale(1.1)", // Always scale up slightly
          objectFit: "cover",
        }}
      ></div>

      {/* Santa Image */}
      <img
        className="santa absolute top-[40%] right-[-20vw] md:top-[30%] md:right-[-15vw] lg:top-[20%] lg:right-[-10vw] w-[250px] md:w-[400px] lg:w-[600px] h-auto"
        src="/background/santa.png"
        alt={t("banner.altText")}
        onAnimationEnd={handleAnimationEnd} // Trigger parallax enablement after animation ends
        style={{
          transform: animationComplete
            ? `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`
            : "none", // Apply parallax only after animation
        }}
      />

      {/* Banner Content */}
      <div className="banner_header relative z-10 px-4 md:px-10 lg:px-20 text-left">
        {/* Button */}
        <p className="banner_btn_style rounded-lg w-[100px] md:w-[200px] lg:w-[240px] lg:text-[11px] text-[5px]">
          {t("banner.btnStyle")}
        </p>

        {/* Tagline */}
        <h1 className="header_tagline text-[18px] md:text-[40px] lg:text-[40px] font-bold leading-tight mt-4">
          <span>{t("banner.tagline.part1")}</span> {t("banner.tagline.part2")}
        </h1>

        {/* Subheading */}
        <h2 className="header_tagline_mid text-[13px] md:text-[25px] font-medium mt-4">
          {t("banner.taglineMid")}
        </h2>

        {/* Bottom Line */}
        <p className="header_tagline_btm text-[8px] md:text-[15px] font-medium flex items-center mt-4 before:content-[''] before:w-10 before:h-[1px] before:bg-white before:mr-2">
          {t("banner.taglineBottom")}
        </p>
      </div>
    </div>
  );
};

export default TradingPage;
