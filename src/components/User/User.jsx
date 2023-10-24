import React, { useEffect , useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userIdAtom } from 'store/atoms/shared.atom'
import { Link } from 'react-router-dom'
import { Grid, Box, Button } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

//import isObject from 'utils/isObject'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { green } from '@mui/material/colors'
import UserUsername from 'components/UserUsername/UserUsername'
// import UserUsername from 'components/UserUsername/UserUsername'

const Item = styled(Paper,{
  shouldForwardProp: (prop) => prop !== 'noHover'
})(({ theme, noHover }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflow: 'hidden',
  // ...(!noHover && { '&:hover': { backgroundColor: '#dfdfdf', cursor: 'pointer' } }),
}))

const User = () => {

  const params = useParams()
  console.log ( 'User 18 - useParams - params = ', params)
  // userid = parseInt(userid)
  const id = params.userid
  console.log ( 'User 18 - useParams - params.userid = ', id)

  const { state } = useLocation()
  console.log (' User - useLocation - state = ', state)

  const navigate = useNavigate()
  //console.log ('useNavigate - navigate = ', navigate)

  //const id = ((number === typeof { userid }) ? userid : parseInt(userid))
  //console.log ( 'User  - id ', id)

  //const userid = parseInt(id)
  //let id = parseInt(userid)

  const [user , setUser] = useState({})

  useEffect(() => {
    //console.log ('User https://jsonplaceholder.typicode.com/users/${userid} = ',`https://jsonplaceholder.typicode.com/users/${id}`)
    //controler.abort
    fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json()
      }).then(data => {

        setUser(data)})
      .catch((err) => {
        console.log('reject reason = ', err)
        alert('Reject reason', err)

      })

  }, [id])

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(0.2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   margin: 2,
  //   border: '2px solid #c2f7c4'
  // }))

  const handlerPostsClick = (id) => {
    console.log('User 60 - handlePossts - userid = ', id, 'name:' , user.name, ' src:', state.src )
    navigate(`/users/${id}/posts`, { state: { name: user.name, src: state.src } } )
  }

  const handlerAlbumsClick = (id) => {
    navigate(`/users/${id}/albums`, { state: { userId: id, name: user.name, src: state.src } })
  }

  const handlerTodosClick = (id) => {
    navigate(`/users/${id}/todos`,{ state: { userId: id, name: user.name, src: state.src } })
  }
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      row={{ xs: 4 }}
      m='auto'
      p={2}
      sx={{ position: 'relative',top: 50, width: '55vw',backgroundColor: '#eaeaea' }}
    >

      <Grid item mx={2}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          m='auto '
          sx={{ position: 'relative',left: 15, border: '1px solid #95be97',borderRadius: 2, width: '42vw', backgroundColor: '#f2f7f3' }}
        >
          <Grid item xs={3.5} m={1} >
            <img src={process.env.PUBLIC_URL + state.src} title = {state.name} alt= {state.name} width={'100%'} />
          </Grid>

          <Grid item xs={6} pt={15} m={1} rowheight={40} >
            <Item pt={20} sx={{ color: 'green', border: '1px solid #b2d8b5', backgroundColor: '#e1f6e2' }}><UserUsername userId={id} /></Item>
          </Grid>

        </Grid>
      </Grid>

      <Grid item xs={5} mx={1}
        sx={{ position: 'relative', width: '45vw',margin: 'auto',padding: 2,backgroundColor: '#eaeaea' }}>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          row={{ xs: 4 }}
          rowheight={10}
          sx={{ position: 'relative', width: '45vw',margin: 'auto',padding: 2,backgroundColor: '#eaeaea' }}
        >
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
                onClick={() => handlerPostsClick(user.id)} >POSTS
              </Item>
            </Grid>
            <Grid item xs={4} >
              <Item
                sx= {{ border: '1px solid gren' , margin: 1, cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } }}
                onClick={() => handlerAlbumsClick(user.id)}>ALBUMS
              </Item>
            </Grid>
            <Grid item xs={4} >
              <Item
                sx= {{ border: '1px solid gren' , margin: 1, cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } }}
                onClick={() => handlerTodosClick(user.id)} >TODOS
              </Item>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
    </ Grid>
  )

}
export default User

/*

*/
