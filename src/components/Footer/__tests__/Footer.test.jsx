import React from 'react'
import { render, screen } from 'test-utils'

import Footer from '../Footer'

describe('Test Footer', () => {

  it('langs should be present', () => {
    render(<Footer />)
    const en = screen.getByTestId('lang-en')
    expect(en).toBeInTheDocument()
    const sr = screen.getByTestId('lang-sr')
    expect(sr).toBeInTheDocument()
  })

})

