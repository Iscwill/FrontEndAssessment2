"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-start justify-between ">
      {/* Left Section */}
      <div className="flex flex-col items-start md:w-[60%] lg:w-[55%]">
        <h2 className="text-red-500 font-semibold text-lg sm:text-xl mb-2">
          {t("steps.subtitle")}
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {t("steps.title")}
        </h1>
        <div className="relative">
          <img
            src="/background/images-3.png"
            alt={t("steps.alt.image")}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start md:w-[40%] lg:w-[35%] relative md:top-[50px] lg:top-[100px] md:left-0 lg:left-[50px]">
        {/* Step 1 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-500 text-white font-bold rounded-full z-10">
              1
            </div>
            <div className="w-px h-[50px] sm:h-[70px] border-dotted border-l border-red-500"></div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-sm sm:text-base">
              {t("steps.steps.register.title")}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("steps.steps.register.description")}
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 text-gray-700 font-bold rounded-full z-10">
              2
            </div>
            <div className="w-px h-[50px] sm:h-[70px] bg-dotted-line"></div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-sm sm:text-base">
              {t("steps.steps.verify.title")}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("steps.steps.verify.description")}
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 text-gray-700 font-bold rounded-full z-10">
              3
            </div>
            <div className="w-px h-[50px] sm:h-[70px] bg-dotted-line"></div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-sm sm:text-base">
              {t("steps.steps.fund.title")}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("steps.steps.fund.description")}
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 text-gray-700 font-bold rounded-full z-10">
              4
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-sm sm:text-base">
              {t("steps.steps.trade.title")}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("steps.steps.trade.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
