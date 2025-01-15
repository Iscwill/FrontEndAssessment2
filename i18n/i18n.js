import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // Not needed for React as it escapes by default
  },
});

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         banner: {
//           btnStyle: "Environment With The Best Pricing",
//           tagline: {
//             part1: "Invest",
//             part2: "Better Together",
//           },
//           taglineMid: "Combining A Transparent Trading",
//           taglineBottom: "Access To The Most",
//         },
//       },
//     },
//   },
//   lng: "en", // Default language
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false, // React already escapes by default
//   },
// });

// export default i18n;

