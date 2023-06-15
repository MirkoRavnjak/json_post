import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'react-jss'

import theme from 'theme'
import i18n from 'common/i18n'

const AllTheProviders = ({
  initializeState = () => { },
  pathname = '/'
  // eslint-disable-next-line react/display-name,react/prop-types
} = {}) => ({ children }) => {

  useEffect(() => {
    Promise.all([
      i18n,
    ]).then(() => {
    })
  }, [])

  return (
    <MemoryRouter initialEntries={[{ pathname }]}>
      <RecoilRoot initializeState={initializeState}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </MemoryRouter>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders(options), ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, screen }
