"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 mb-6">
        {/* Language */}
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <span className="text-black ">
          <FontAwesomeIcon icon={faGlobe} className="text-black mr-2" /> {t("footer.language")}
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-justify">
        <p>{t("footer.paragraph1")}</p>
        <p>{t("footer.paragraph2")}</p>
        <p>{t("footer.paragraph3")}</p>
      </div>
    </footer>
  );
};

export default Footer;
