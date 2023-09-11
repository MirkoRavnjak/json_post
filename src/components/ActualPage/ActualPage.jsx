import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box,Grid, CardActionArea, CardContent, Typography } from '@mui/material'
//import TablePagination from '@mui/material/TablePagination'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'

const ActualPage = (props) => {

  const actualPage = props.actualPage
  const role = props.role
  const handleItem = props.handleItem

  let lg = 9
  if (role === 'todos'){
    lg = 7
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    color: theme.palette.text.primary,
    margin: 2,
    overflowX: 'hidden',
    textAlign: 'center',
  }))

  return (
    <Grid
      container
      direction="column"
      marginTop={2}
      rowheight={12}
      marginX={'auto'}
    >

      { actualPage?.map((item) => (

        <Grid container direction='row' key ={item.id}>

          <Grid item xs={1.5} >
            {role !== 'users' ? <Item > {item.userId} </Item> : <Item > {item.id} </Item>}
          </Grid>

          {(role !== 'users') ? <Grid item xs={1.5} ><Item > {item.id} </Item></Grid> : <Grid item xs={3} md={4} lg={5} >
            <Item
              sx={{ cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } } }
              onClick={()=>handleItem(item.id)}> {item.name} </Item></Grid> }

          {role !== 'users' && <Grid item xs={lg} >
            <Item
              sx={{ textAlign: 'left' , cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } } }
              onClick={()=>handleItem(item.userId, item.id)}>
              {item.title}
            </Item>
          </Grid>}

          {role === 'users' && <Grid item xs={2} ><Item > {item.username} </Item></Grid> }

          {role === 'users' && <Grid item xs={3} ><Item > {item.email} </Item></Grid> }

          {role === 'todos' && <Grid item xs={2} >
            {item.completed ? <Item sx={{ color: 'green' }}> YES </Item> : <Item sx={{ color: 'red' }}> NO </Item>}
          </Grid>}

        </Grid>))
      }
    </Grid>
  )
}
export default ActualPage

ActualPage.propTypes = {
  actualPage: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
  handleItem: PropTypes.func.isRequired
}
