"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const PopularInstruments = () => {
  const { t } = useTranslation();

  const brandImages = [];
  for (let i = 1; i <= 7; i++) {
    brandImages.push(`/brands/brands (${i}).png`);
  }

  return (
    <section className="popular-instruments">
      {/* Top Brand Images */}
      <div className="brands-container grid grid-cols-4 md:grid-cols-7 gap-6 justify-items-center mb-10">
        {brandImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={t(`popularInstruments.brands.brand${index + 1}`)}
            className="brand-logo"
          />
        ))}
      </div>

      {/* Access Header */}
      <div className="access-header ml-[5%] mb-10">
        <p className="tagline">{t("popularInstruments.tagline")}</p>
        <h1 className="heading">{t("popularInstruments.heading")}</h1>
      </div>

      {/* Instrument Grid */}
      <div className="instrument-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/forex.png"
            alt={t("popularInstruments.forex.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.forex.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.forex.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/gold.png"
            alt={t("popularInstruments.preciousMetals.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.preciousMetals.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.preciousMetals.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/stock.png"
            alt={t("popularInstruments.stocks.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.stocks.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.stocks.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/energy.png"
            alt={t("popularInstruments.energies.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.energies.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.energies.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/indices.png"
            alt={t("popularInstruments.stockIndices.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.stockIndices.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.stockIndices.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/crypto.png"
            alt={t("popularInstruments.cryptocurrencies.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.cryptocurrencies.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.cryptocurrencies.description")}
            </p>
          </div>
        </div>
        <div className="instrument-item flex items-start gap-4">
          <img
            src="/icons/wheat.png"
            alt={t("popularInstruments.commodities.alt")}
            className="icon"
          />
          <div>
            <h2 className="subheading">
              {t("popularInstruments.commodities.title")}
            </h2>
            <p className="description">
              {t("popularInstruments.commodities.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInstruments;
