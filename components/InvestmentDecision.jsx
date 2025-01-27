"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const InvestmentDecision = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-white overflow-hidden flex justify-center ">
      {/* Background Image */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute bottom-0 w-full h-[100px] sm:h-[150px] md:h-[200px] bg-cover bg-center"
          style={{ backgroundImage: "url('/background/images-2.jpg')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-auto md:py-16 md:px-20 lg:px-40  sm:w-[90%] md:w-[80%]">
        {/* Left Card */}
        <div className="relative investment_card p-[16px] sm:p-5 lg:p-20 md:w-[600px] lg:w-[800px] lg:top-[40px] lg:left-[-150px] 2xl:left-[10%] lg:h-[450px]">
          <h2 className="mb-4">{t("investmentDecision.subtitle")}</h2>
          <h1 className=" mb-6 w-[60%]">{t("investmentDecision.title")}</h1>
          <ul className="space-y-2">
            <li className="flex items-center justify-between font-medium text-sm sm:text-base">
              <span>
                {t("investmentDecision.features.dailyMarketReviews")}{" "}
                <span className="ml-[30px]">&rarr;</span>
              </span>{" "}
            </li>
            <li className="flex items-center justify-between font-medium text-sm sm:text-base">
              <span>
                {t("investmentDecision.features.tradingTools")}{" "}
                <span className="ml-[30px]">&rarr;</span>
              </span>{" "}
            </li>
            <li className="flex items-center justify-between font-medium text-sm sm:text-base">
              <span>
                {t("investmentDecision.features.technicalAnalysis")}{" "}
                <span className="ml-[30px]">&rarr;</span>
              </span>{" "}
            </li>
            <li className="flex items-center justify-between font-medium text-sm sm:text-base">
              <span>
                {t("investmentDecision.features.economicCalendar")}{" "}
                <span className="ml-[30px]">&rarr;</span>
              </span>{" "}
            </li>
          </ul>
        </div>

        {/* Right Phone Image */}
        <img
          src="/background/mobile-phone.png"
          alt={t("investmentDecision.alt.mobilePhone")}
          className="hidden xl:block lg:absolute lg:bottom-[-20%] lg:right-[50px] 2xl:right-[20%] w-[120px] sm:w-[180px] md:w-[200px] lg:w-[300px] lg:top-[100px]"
        />
      </div>
    </div>
  );
};

export default InvestmentDecision;
