import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import UserUsername from 'components/UserUsername/UserUsername'

const Album = () => {

  const { userid, albumid } = useParams()
  const [album, setAlbum] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setAlbum(data)
      }).catch((err) => {
        console.log('reject', err)
      })
  }, [albumid])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflowY: 'scroll',
  }))

  return (

    <Grid
      container
      direction="column"
      mt={5}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    >...User - one album...

      <Grid item xs={8} mx={10} >
        <Item >
          <UserUsername userid={userid} />
        </Item>
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
          <Grid item xs={5} md={10} > <Item sx={{ textAlign: 'left' }}> {album.title}  </Item> </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}
export default Album

