import React from 'react'
import { useRecoilState } from 'recoil'
import i18n from 'i18next'

import { languageAtom } from 'store/atoms/shared.atom'

const Footer = () => {
  const [lang, setLang] = useRecoilState(languageAtom)

  const languages = {
    en: 'English',
    sr: 'Srpski',
  }

  const languageChange = (lang) => () => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return (
    <div>
      {Object.keys(languages).map((key) => (
        key === lang ? (
          <small data-testid={`lang-${key}`} key={key}> {languages[key]} </small>
        ) : (
          <span data-testid={`lang-${key}`} key={key} onClick={languageChange(key)}>
            {languages[key]}
          </span>
        )
      ))}
    </div>
  )
}

export default Footer
