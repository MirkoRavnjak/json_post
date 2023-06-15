import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Loading from 'components/Loading'
import Header from 'components/Header'
import PropTypes from 'prop-types'

import styles from './Router.styles'

const Home = React.lazy(() => import('./Home'))

const useStyles = createUseStyles(styles)
const Router = ({ isLoading }) => {
  const classes = useStyles()

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Suspense fallback="Loading...">
          <Routes>
            <Route key="home" path="/" element={<Home /> } />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

Router.propTypes = {
  isLoading: PropTypes.bool
}

Router.defaultProps = {
  isLoading: false
}

export default Router
