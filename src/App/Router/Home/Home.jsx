import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid } from '@mui/material'

const Home = () => {

  const navigate = useNavigate()

  return (
    <Grid
      container
      my={5.8}
      justifyContent="space-evenly"
      py={5}
      mx={'auto'}
      sx={{ backgroundColor: '#e9ede9', borderRadius: '8px' }}
    >
      <Grid item xs={2} p={'auto'} >
        <Button variant="contained" onClick={() => navigate('/users')} > ALL USERS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'} >
        <Button variant="contained" onClick={() => navigate('/allposts')} > ALL POSTS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'}>
        <Button variant="contained" onClick={() => navigate( './allalbums')} > ALL ALBUMS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'} >
        <Button variant="contained" onClick={() => navigate( './alltodos')} > ALL TODOS </Button>
      </Grid>

    </Grid>
  )

}

export default Home
