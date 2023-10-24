import React, { useEffect, useState } from 'react'
import { useParams ,useLocation,useNavigate } from 'react-router-dom'
import { Grid, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import UserUsername from 'components/UserUsername/UserUsername'

import Title from 'components/Title'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflowY: 'hidden',
}))

const Album = () => {
  //console.log('...Album...')
  const navigate = useNavigate()
  const params = useParams()
  
  console.log('Album ... params = ', params)
  const userid = params.userid
  const albumid = params.albumid


  const location = useLocation()
  const name = location.state.name
  const src = location.state.src
  console.log('Album ... state = ',location.state)

  const [album, setAlbum] = useState('')
  const [error, setError] = useState('')

  const txt = 'Album no. - ' + albumid + '- of user -' + name

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setAlbum(data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [albumid])

  return (

    <Grid
      container
      direction="column"
      mt={5}
      p={5}
      backgroundColor={'#cddccd' }
    >...User - one album...

      <Grid
        container
        direction="row"
        mt={8}
        rowheight={10}
        key={'text'}
        text={txt}
      />

      <Title key={'albumtext'} text='ONE ALBUM OF USER' />

      <Grid item key={'name'} mx={'auto'} xs={10}>

        <Grid key={'name_container'}
          container
          direction="row"
          justifyContent="space-evenly"
          m='auto '
          space={1}

        >
          <Grid item key={src} m={1} xs ={5} >
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
          <Grid item xs={1} ><Item > ALBUM ID </Item></Grid>
          <Grid item xs={5} md={10} ><Item > ALBUM TITLE </Item> </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1} > <Item> {album.userId}</Item> </Grid>
          <Grid item xs={1} > <Item> {album.id}</Item></Grid>
          <Grid item xs={10} > <Item sx={{ border: '2px solid #c8f0cc', overflow: 'scroll', textAlign: 'left' }}>  {album.title}  </Item> </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}
export default Album

