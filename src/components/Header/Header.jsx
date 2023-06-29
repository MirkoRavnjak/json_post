import React, { useEffect } from 'react'
import { Container, Box, Button, position, top } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {

  let location = useLocation()

  console.log(' location = ',location)

  // useEffect(() => {
  //   console.log(location)
  // }, [])

  return (
    <Container position= 'fixed' sx={{ border: 1 , textAlign: 'center' }}>

      {location.pathname}
    </Container >
  )
}

export default Header
