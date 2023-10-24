import React, { useEffect, useState } from 'react'
import { Button, Grid, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const Header = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [isHome, setIsHome] = useState(true)
  let location = useLocation()
  const [localePath, setLocalePath] = useState(location.pathname)

  useEffect(()=> {
    if (location.pathname === '/' || location.pathname === '/error') {
      setIsHome(false)
      setLocalePath('HOME')
    }
    else {
      setIsHome(true)
      setLocalePath(location.pathname)
    }},[location])

  const handleHomeButtonClick = () => {
    navigate('/')
  }
  const Item = styled(Grid)(({ theme }) => ({
    item: true,
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cccccc',
    ...theme.typography.body2,
    paddingTop: 2 ,
    textAlign: 'center',
    itemAlign: 'center',
    color: theme.palette.text === 'dark' ? '#cccccc' : '#1A2027' ,
    minWidth: '5vw',
    minHeight: 36,
    maxHeight: 46,
    width: '30%',

  }))

  return (
    <Box>
      <Grid
        m={'auto'}
        px={1}
        container
        width='50%'
        directions='column'
        spacing ={0.1}
        justifyContent='space-evenly'

      >
        <Item>id = {id}</Item>
        <Item > {`(${localePath} )`} </Item>
        <Item>
          {isHome && <Button variant= 'outlined' onClick={handleHomeButtonClick}
            sx={{ backgroundColor: '#ccddcc', maxHeight: '2.5vh' }}> HOME </Button>}
        </Item>

      </Grid>
    </Box>
  )
}

export default Header

