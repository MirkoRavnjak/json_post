import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'react-jss'
import { useRecoilValue } from 'recoil'

import i18n from 'common/i18n'
import ErrorBoundary from 'components/ErrorBoundary'
import { languageAtom } from 'store/atoms/shared.atom'
import Footer from 'components/Footer'

import theme from '../theme'

import Router from './Router'

function App() {
  const [loading, setLoading] = useState(true)

  const language = useRecoilValue(languageAtom)

  useEffect(() => {
    Promise.all([
      i18n,
    ]).then(() => {
      i18n.changeLanguage(language)
      setLoading(false)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <ErrorBoundary>
        <div>
          <Router isLoading={loading} />
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
