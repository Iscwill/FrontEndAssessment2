"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const BrandIntroduce = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-[350px] lg:w-full">
      <div className="relative ">
        {/* Image Container */}
        <div className="absolute flex w-full justify-between items-center">
          {/* Left Bull */}
          <img
            src="/background/bull.png"
            alt={t("brandIntroduce.bullAlt")}
            className="absolute hidden xl:block left-[-150px] sm:left-[-180px] md:left-[-210px] top-[-12px] w-[120px] sm:w-[200px] md:w-[500px] lg:w-[640px]"
          />

          {/* Right Bear */}
          <img
            src="/background/bear.png"
            alt={t("brandIntroduce.bearAlt")}
            className="absolute hidden xl:block right-[-150px] sm:right-[-180px] md:right-[-210px] top-[-12px] w-[120px] sm:w-[200px] md:w-[250px] lg:w-[320px]"
          />
        </div>

        <div className="relative z-10 flex flex-col xl:flex-row ">
          {/* Left Section (Main Card) */}
          <div className="brand_card1 z-10 flex-[4] md:mr-[-270px] lg:mr-[-350px] sm:w-[350px] md:w-[600px] lg:w-[600px] bg-white p-2 sm:p-8 lg:p-12 border border-gray-300 rounded-lg">
            <h2 className="text-red-500 font-semibold text-lg sm:text-xl mb-4">
              {t("brandIntroduce.mainCard.title")}
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t("brandIntroduce.mainCard.heading")}
            </h1>
            <p className="text-gray-700 mb-6">
              {t("brandIntroduce.mainCard.description")}
            </p>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
              {t("brandIntroduce.mainCard.button")}
            </button>
          </div>

          {/* Right Section (Second and Third Cards) */}
          <div className="z-20 flex flex-col gap-8 flex-[2] mt-[5%] lg:mt-0">
            {/* Second Card */}
            <div className="brand_card2 relative top-8 md:top-0 lg:top-[30px] bg-white p-4 sm:p-6 lg:p-8 border border-gray-300 rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[420px] lg:h-[200px]">
              <h2 className="text-lg font-bold mb-4">
                {t("brandIntroduce.secondCard.title")}
              </h2>
              <p className="text-gray-700">
                {t("brandIntroduce.secondCard.description")}
              </p>
            </div>

            {/* Third Card */}
            <div className="brand_card3 relative top-8 md:top-0 lg:top-[30px] xl:left-[-40px] bg-white p-4 sm:p-6 lg:p-8 border border-gray-300 rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:w-[400px] lg:h-[200px]">
              <h2 className="text-lg font-bold mb-4">
                {t("brandIntroduce.thirdCard.title")}
              </h2>
              <p className="text-gray-700">
                {t("brandIntroduce.thirdCard.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntroduce;
