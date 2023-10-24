import React, { useState, useEffect } from 'react'

import { Avatar, Grid , Checkbox, FormControl, FormControlLabel, FormGroup, IconButton } from '@mui/material'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import ModalComp from 'components/ModalComp'

const Item = styled(Paper,{
  shouldForwardProp: (prop) => prop !== 'noHover' })(({ theme, noHover }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflow: 'hidden',
  ...(!noHover && { '&:hover': { backgroundColor: '#dfdfdf', cursor: 'pointer' } }),
}))

const ActualPage = (props) => {

  const actualPage = props.actualPage
  console.log('ActualPage props   = ' ,props)
  console.log('actualPage  = ' ,actualPage)
  // const handleAvatar = props.handleAvatar
  const role = props.role
  const handleItem = props.handleItem
  const allForDelete = props.allForDelete
  const [name, setName] = useState('')
  const [src, setSrc] = useState('')
  const [isAvatar, setIsAvatar] = useState(false)
  const [checked, setChecked] = useState()

  let lg = 9
  if (role === 'todos'){
    lg = 8
  }

  const handleAvatar = (src, name) => {
    console.log('Actual page - handleAvatar name , src  =', name, src)
    setName(name)
    setSrc(src)
    setIsAvatar(!isAvatar)
  }

  const handleCloseAvatar = () => {
    setIsAvatar(!isAvatar)
  }

  return (
    <Grid
      container
      direction="column"
      rowheight={20}
      fontSize={6}
    >

      <FormControl>
        <FormGroup>
          { actualPage?.map((item) => (

            <Grid container
              direction='row'
              key ={item.id}
              spacing={0.5}>

              <Grid item xs={0.5} >
                {isAvatar && <ModalComp onClose={handleCloseAvatar} src={src} name={item.name} />}
                {role == 'users' || role === 'posts' || role === 'albums' || role === 'todos'
                  ?
                  <IconButton title = {item.name}
                    onClick={() => handleAvatar(process.env.PUBLIC_URL + item.src, item.name)} >
                    <Avatar
                      sx={{ width: 30, height: 25 }}
                      title={item.name}
                      alt={toString(item.name)}
                      src={process.env.PUBLIC_URL + item.src} />
                  </IconButton>
                  : null
                }
              </Grid>

              <Grid item xs={1} >
                {role !== 'users' ? <Item noHover> {item.userId} </Item> : <Item noHover> {item.id} </Item>}
              </Grid>

              {(role !== 'users')
                ?
                <Grid item xs={1} ><Item noHover='true'> {item.id} </Item></Grid>
                :
                <Grid item xs={5} >
                  <Item
                    onClick={() => handleItem(item.id, item.src)}
                  >
                    {item.name}
                  </Item>
                </Grid>
              }

              {role !== 'users' && role !== 'todos' && <Grid item xs={9} >
                <Item
                  sx={{ textAlign: 'left' }}
                  onClick={()=> handleItem(item.userId, item.id, item.name, item.src)
                  }>
                  {item.title}
                </Item>
              </Grid>
              }
              {role === 'todos' && <Grid item xs={7} >
                <Item
                  sx={{ textAlign: 'left' }}
                  onClick={()=> handleItem(item.userId, item.id, item.name, item.src)
                  }>
                  {item.title}
                </Item>
              </Grid>
              }

              {role === 'users' && <Grid item xs={2} ><Item noHover> {item.username} </Item></Grid> }
              {role === 'users' && <Grid item xs={3} ><Item noHover> {item.email} </Item></Grid> }
              {role === 'todos' && <Grid item xs={2} >
                {item.completed ? <Item noHover sx={{ color: 'green' }}> YES </Item> : <Item noHover sx={{ color: 'red' }}> NO </Item>}
              </Grid>}

              {/* {(role === 'users' || role === 'posts') || role === 'albums' && role === 'todos' && */}
              <Grid item xs={0.5} px={'auto'} >
                <FormControlLabel
                  control={
                    <Checkbox
                      value={item.id}
                      checked={checked}
                      title='Deleted?'
                      onClick={() => allForDelete(item.id)}
                    />
                  }
                />
              </Grid>
              {/* } */}

            </Grid>))
          }
        </FormGroup>
      </FormControl>
    </Grid>
  )
}
export default ActualPage

ActualPage.propTypes = {
  actualPage: PropTypes.array.isRequired,
  handleItem: PropTypes.func.isRequired,
  allForDelete: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
}

/*
      // console.log('ActualPage 100 - item.id, item.id, item.name = ', item.id, item.name, item.bigSrc )
       console.log('ActualPage 114 - item.userId, item.id, item.name, item.bigSrc = ', item.userId, item.id, item.name, item.bigSrc )
    // 97 onClick={()=>handleItem(item.id, item.bigSrc)}> {item.name} </Item></Grid>

*/
