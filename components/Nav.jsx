"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname(); // Get the current pathname

  // Lock or unlock scrolling based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Lock scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up
    };
  }, [isMenuOpen]);

  // Close hamburger menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu on desktop size
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getActiveClass = (path) =>
    pathname === path ? "text-red-500 font-bold" : "text-gray-700";

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="Navbar_Menu w-full flex-col">
      {/* Top Navigation */}
      <div className="topNav flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="Logo text-lg font-bold">{t("nav.logo")}</h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="Ham_btn text-xl md:hidden" // Show only on smaller screens
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Buttons (Visible on md and larger) */}
        <div className="Nav_buttons hidden md:flex gap-7">
          <button className="btn white">{t("nav.buttons.demo")}</button>
          <button className="btn white">{t("nav.buttons.login")}</button>
          <button className="btn red">{t("nav.buttons.signup")}</button>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Divider */}
      <hr className="hidden md:block" />

      {/* Navigation Links (Always visible for md and larger) */}
      <div className="nav-links hidden md:flex gap-6 items-center justify-center mt-4">
        <Link href="/trading" className={getActiveClass("/trading")}>
          {t("nav.menu.trading")}
        </Link>
        <Link href="/platforms" className={getActiveClass("/platforms")}>
          {t("nav.menu.platforms")}
        </Link>
        <Link href="/client-tools" className={getActiveClass("/client-tools")}>
          {t("nav.menu.clientTools")}
        </Link>
        <Link href="/promotions" className={getActiveClass("/promotions")}>
          {t("nav.menu.promotions")}
        </Link>
        <Link href="/research" className={getActiveClass("/research")}>
          {t("nav.menu.research")}
        </Link>
        <Link href="/partnerships" className={getActiveClass("/partnerships")}>
          {t("nav.menu.partnerships")}
        </Link>
        <Link href="/about-us" className={getActiveClass("/about-us")}>
          {t("nav.menu.aboutUs")}
        </Link>
      </div>

      {/* Hamburger Menu (Visible only for smaller screens) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center gap-6 p-4 w-full overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          {/* Navigation Links */}
          <div className="nav-links flex flex-col gap-6 items-center">
            <Link
              href="/trading"
              className={getActiveClass("/trading")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.trading")}
            </Link>
            <Link
              href="/platforms"
              className={getActiveClass("/platforms")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.platforms")}
            </Link>
            <Link
              href="/client-tools"
              className={getActiveClass("/client-tools")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.clientTools")}
            </Link>
            <Link
              href="/promotions"
              className={getActiveClass("/promotions")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.promotions")}
            </Link>
            <Link
              href="/research"
              className={getActiveClass("/research")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.research")}
            </Link>
            <Link
              href="/partnerships"
              className={getActiveClass("/partnerships")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.partnerships")}
            </Link>
            <Link
              href="/about-us"
              className={getActiveClass("/about-us")}
              onClick={handleLinkClick}
            >
              {t("nav.menu.aboutUs")}
            </Link>
          </div>

          {/* Buttons */}
          <div className="Nav_buttons flex flex-col gap-4 items-center">
            <button className="btn white">{t("nav.buttons.demo")}</button>
            <button className="btn white">{t("nav.buttons.login")}</button>
            <button className="btn red">{t("nav.buttons.signup")}</button>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
