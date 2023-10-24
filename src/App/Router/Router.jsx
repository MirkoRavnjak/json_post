import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import Loading from 'components/Loading'

import Header from 'components/Header'
import Footer from 'components/Footer'

import User from 'components/User'
import Users from 'components/ALL/Users/Users'

import Post from 'components/Post'
import Posts from 'components/Posts'
import AllPosts from 'components/ALL/AllPosts'

import Todo from 'components/Todo'
import Todos from 'components/Todos/Todos'
import AllTodos from 'components/ALL/AllTodos/AllTodos'

import Album from 'components/Album'
import Albums from 'components/Albums'
import AllAlbums from 'components/ALL/AllAlbums/AllAlbums'

import Error from 'components/Error'

const Home = React.lazy(() => import('../Router/Home'))

const Router = ({ isLoading }) => {

  if (isLoading) {
    return <Loading />
  }
  return (
    <Container
      px={'auto'}
      width='60%'
      spacing={0.1}
      direction={'column'}
      textalign={ 'center'}
      itemalign= {'center'}
    >

      <Grid item

        bgcolor={'#cddccd'}
        xs={6}
        mx='auto'
        mt={5}
      >
        <Header />
      </Grid>
      <Grid item mx= {'auto'} >

        <Routes>
          <Route key="home" path='/' element= {< Home />} />

          <Route key="users" path = "/users" element={ <Users /> } />
          <Route key="user" path = "/users/:userid" element={ <User /> } />

          <Route key="allPosts" path = "/allposts" element={ <AllPosts /> } />
          <Route key="posts" path = "/users/:userid/posts" element={ <Posts /> } />
          <Route key="post" path = "/users/:userid/posts/:postid" element={ <Post /> } />

          <Route key="allTodos" path = "/alltodos" element={ <AllTodos /> } />
          <Route key="todos" path = "/users/:userid/todos" element={ <Todos /> } />
          <Route key="todo" path = "/users/:userid/todos/:todoid" element={ <Todo /> } />

          <Route key="allAlbums" path = "/allalbums" element={ <AllAlbums /> } />
          <Route key="albums" path = "/users/:userid/albums" element={ <Albums /> } />
          <Route key="album" path = "/users/:userid/albums/:albumid" element={ <Album /> } />

          <Route key="err" path = "*" element={ <Error /> } />
        </Routes>

      </Grid>

      <Grid item
        xs={3}
        mx={'auto'}
        px={'auto'}
        minHeight={25}
        position={'fixed'}
        bottom={10}
        left={'45%'}
      >
        <Footer />
      </Grid>

    </Container>

  )
}

export default Router

Router.propTypes = {
  isLoading: PropTypes.bool
}

Router.defaultProps = {
  isLoading: false
}

