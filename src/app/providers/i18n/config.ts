import i18n from "i18next";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

i18n.init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;