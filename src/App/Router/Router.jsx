import React, { Suspense } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Loading from 'components/Loading'
import Header from 'components/Header'
import Footer from 'components/Footer/'
import Detail from 'components/Detail'
import Posts from 'components/Posts/'
import Post from 'components/Post/'
import Todos from 'components/Todos/'
import Albums from 'components/Albums/'

import PropTypes from 'prop-types'

import styles from './Router.styles'

const Home = React.lazy(() => import('./Home'))

const useStyles = createUseStyles(styles)
const Router = ({ isLoading }) => {
  const classes = useStyles()

  const id = useParams()
  console.log('Router id _ useParams = ', id)

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
            <Route key="detail" path="/detail/:id" element={<Detail /> } />
            <Route key="posts" path="/posts" element={<Posts /> } />
            <Route key="post" path="/post" element={<Post /> } />
            <Route key="post" path="/todos" element={<Todos /> } />
            <Route key="post" path="/albums" element={<Albums /> } />
          </Routes>
        </Suspense>
      </div>
      <Footer />
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
