import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import UserUsername from 'components/UserUsername/UserUsername'

const Post = () => {

  const { userid, postid } = useParams()

  const [post, setPost] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setPost(data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [postid])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflowY: 'hidden',
  }))

  return (

    <Grid
      container
      direction="column"
      mt={5}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    >...User - one post...

      <Grid item xs={10} >
        <Item >
          <UserUsername userid={userid} />
        </Item>
      </Grid>

      <Grid item >
        <Grid container direction='row'>
          <Grid item xs={1} ><Item > USER ID </Item></Grid>
          <Grid item xs={1} ><Item > POST ID </Item></Grid>
          <Grid item xs={10} md={10} ><Item sx={{ textAlign: 'center' }} > POST BODY </Item> </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1} > <Item> {post.userId}</Item> </Grid>
          <Grid item xs={1} > <Item> {post.id}</Item></Grid>
          <Grid item xs={10} > <Item sx={{ border: '2px solid #c8f0cc', overflow: 'scroll', textAlign: 'left' }}> {post.body}  </Item> </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}
export default Post

