import React, { useEffect , useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userIdAtom } from 'store/atoms/shared.atom'
import { Link } from 'react-router-dom'
import { Grid, Box, Button } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import isObject from 'utils/isObject'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { green } from '@mui/material/colors'
import UserUsername from 'components/UserUsername/UserUsername'

const User = () => {
  console.log( 'USER PAGE')
  const navigate = useNavigate()
  // const { location } = useLocation()
  const { userid } = useParams()

  //let id = parseInt(userid)

  console.log(' User - userid = ' , userid , 'typeof userid = ',typeof (userid))

  const [user , setUser] = useState({})

  useEffect(() => {
    //controler.abort
    fetch (`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((response) => {
        return response.json()
      }).then(data => {

        setUser(data)})
      .catch((err) => {
        console.log('reject reason = ', err)
        alert('Reject reason', err)

      })

  }, [userid])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 2,
    border: '2px solid #c2f7c4'
  }))

  const handlerPostsClick = () => {
    navigate(`/users/${userid}/posts`)
  }

  const handlerAlbumsClick = () => {
    navigate(`/users/${userid}/albums`)
  }

  const handlerTodosClick = () => {
    navigate(`/users/${userid}/todos`)
  }
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        row={{ xs: 4 }}
        rowheight={10}
        sx={{ position: 'relative',top: 55, width: '45vw',margin: 'auto',padding: 2,backgroundColor: '#eaeaea' }}
      >
        <Grid item xs={5} mx={4}>
          <Item sx={{ color: 'green', backgroundColor: '#e1f6e2' }}> <UserUsername userid={userid} /> </Item>
        </Grid>

        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> ID </Item> <Item > {user.id} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Name </Item> <Item > {user.name} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> User Name </Item> <Item > {user.username} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> email </Item> <Item > {user.email} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Website </Item><Item > {user.website} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Phone </Item> <Item > {user.phone} </Item>
        </Grid>

        <Grid item xs={4} mx={4} >
          <Item sx={{ color: 'green', backgroundColor: '#e1f6e2' }} > Address  </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Street  </Item> <Item > {user.address?.street} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Suite </Item> <Item > {user.address?.suite} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> City </Item> <Item > {user.address?.city} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Zip Code </Item> <Item > {user.address?.zipcode} </Item>
        </Grid>

        <Grid item xs={4} mx={4} >
          <Item sx={{ color: 'green', backgroundColor: '#e1f6e2' }}> GEO Location </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Latitude </Item> <Item > {user.address?.geo.lat} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Longtitude    </Item> <Item > {user.address?.geo?.lng} </Item>
        </Grid>

        <Grid item xs={6} md={4} ml={3} mr={3} color={green}>
          <Item sx={{ color: 'green', backgroundColor: '#e1f6e2' }}> Company </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Name </Item> <Item > {user.company?.name} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Catch Phrase  </Item> <Item > {user.company?.catchPhrase} </Item>
        </Grid>
        <Grid item sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
          <Item> Bs </Item> <Item > {user.company?.bs} </Item>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4} >
            <Item
              sx= {{ border: '1px solid gren' , margin: 1, cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } }}
              onClick={handlerPostsClick} >POSTS
            </Item>
          </Grid>
          <Grid item xs={4} >
            <Item
              sx= {{ border: '1px solid gren' , margin: 1, cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } }}
              onClick={handlerAlbumsClick}>ALBUMS
            </Item>
          </Grid>
          <Grid item xs={4} >
            <Item
              sx= {{ border: '1px solid gren' , margin: 1, cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } }}
              onClick={handlerTodosClick} >TODOS
            </Item>
          </Grid>

        </Grid>

      </Grid>
    </>
  )

}
export default User

/*

*/
