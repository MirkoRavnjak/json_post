import React from 'react'

import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  state = {
    hasError: false,
    network: 'online'
  }
  networkTimer = null

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidMount() {
    window.addEventListener('online', this.setNetwork)
    window.addEventListener('offline', this.setNetwork)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setNetwork)
    window.removeEventListener('offline', this.setNetwork)
  }

  setNetwork = ({ type }) => {
    const { network } = this.state
    if (type !== network) {
      if (type === 'offline') {
        this.networkTimer = setTimeout(() => {
          this.setState({ network: type })
        }, 2000)
      } else {
        this.setState({ network: type })
      }

    }
    if (type === 'online' && this.networkTimer) {
      clearTimeout(this.networkTimer)
    }
  }

  render() {
    const { hasError, network } = this.state
    const { children } = this.props

    let errorCode = null
    if (hasError) {
      errorCode = '500'
    }

    if (network === 'offline') {
      errorCode = 'offline'
    }

    return (
      <div>
        <p>{errorCode}</p>
        { children }
      </div>
    )
  }
}

export default ErrorBoundary
