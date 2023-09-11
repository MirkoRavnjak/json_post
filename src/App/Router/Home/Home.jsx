import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid } from '@mui/material'

const Home = () => {

  const navigate = useNavigate()

  return (
    <Grid
      container
      width={'60%'}
      position={'absolute'}
      top={100}
      justifyContent="space-evenly"
      padding={5}
      sx={{ backgroundColor: '#e9ede9', borderRadius: '8px' }}
    >
      <Grid item xs={2} p={'auto'} sx={{ backgroundColor: '#f7f7f7' , borderRadius: '8px' }}>
        <Button variant="contained" onClick={() => navigate('/users')} > ALL USERS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'} sx={{ backgroundColor: '#f7f7f7' , borderRadius: '8px' }}>
        <Button variant="contained" onClick={() => navigate('/allposts')} > ALL POSTS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'} sx={{ backgroundColor: '#f7f7f7' , borderRadius: '8px' }}>
        <Button variant="contained" onClick={() => navigate( './allalbums')} > ALL ALBUMS </Button>
      </Grid>

      <Grid item xs={2} p={'auto'} sx={{ backgroundColor: '#f7f7f7' , borderRadius: '8px' }}>
        <Button variant="contained" onClick={() => navigate( './alltodos')} > ALL TODOS </Button>
      </Grid>

    </Grid>
  )

}

export default Home
