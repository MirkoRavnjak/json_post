import React, { useEffect, useState } from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Title from 'components/Title/Title'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflowY: 'hidden',
}))

const Post = () => {

  const params = useParams()
  const userid = params.userid
  const postid = params.postid

  const location = useLocation()
  const name = location.state.name
  const src = location.state.src

  const [post, setPost] = useState('')
  const [error, setError] = useState('')

  const txt = 'Post no. - ' + postid + '- of user -' + name

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

  return (

    <Grid
      container
      direction="column"
      mt={8}
      p={4}
      backgroundColor={'#cddccd' }
    >...User - one post...

      <Grid
        container
        direction="row"
        mt={8}
        rowheight={10}
        key={'text'}
        text={txt}
      />

      <Title key={'posttext'} text='ONE POSTS OF USER' />

      <Grid item key={'name'} mx={'auto'} xs={10}>

        <Grid key={'name_container'}
          container
          direction="row"
          justifyContent="space-evenly"
          m='auto '
          space={1}
        >
          <Grid item key={src} xs ={5} m={1}>
            <Box >
              <img src={process.env.PUBLIC_URL + src } title = {name} alt= {name} width={'100%'} />
            </Box>
          </Grid>

          <Grid item key={name} xs={3} pt={10}>
            <Title
              islink={true}
              text={name}
              userid={userid}
              src={src}
            />
          </ Grid>

        </Grid>
      </Grid>

      <Grid item >
        <Grid container direction='row'>
          <Grid item xs={1} ><Item > USER ID </Item></Grid>
          <Grid item xs={1} ><Item > POST ID </Item></Grid>
          <Grid item xs={10} ><Item sx={{ textAlign: 'center' }} > POST BODY </Item> </Grid>
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

