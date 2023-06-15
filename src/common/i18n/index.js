import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { initReactI18next, useTranslation } from 'react-i18next'

import en from './texts/i18n-en.json'
import sr from './texts/i18n-sr.json'

export {
  useTranslation
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  // init with resources
    resources: {
      en: {
        translations: en,
      },
      sr: {
        translations: sr,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.REACT_APP_I18N_DEBUG === 'true',

    // have a common namespace used around the full App
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      formatSeparator: ',',
    },

  })

export default i18n
