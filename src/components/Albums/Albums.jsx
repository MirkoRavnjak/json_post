import React, { useEffect } from 'react'
import { Container, Box, Button, position, top, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import isObject from 'utils/isObject'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { green } from '@mui/material/colors'

const Albums = () => {

  const navigate = useNavigate()
  let location = useLocation()

  console.log(' location = ',location)

  // useEffect(() => {
  //   console.log(location)
  // }, [])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 3
  }))

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="left"
      row={{ xs: 2 }}
      rowheight={12}
      sx={{ position: 'relative',top: 35, width: '45vw', height: '80vh', margin: 'auto',padding: 2,backgroundColor: '#eaeaea' }}
    >
      <Box xs={6} md={4} ml={3} mr={3} ><Item sx={{ color: 'green' }}>   ... Albums ...  </Item></Box>
    </Grid>
  )
}
export default Albums

