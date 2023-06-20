import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'common/i18n'
import { Container, Grid, Box, Button, position, top, ListItem, ListItemText, Typography } from '@mui/material'
//import { Item } from '@mui/styled-engine-sc'

const Home = () => {

  const { t } = useTranslation()
  const [ users, setUsers] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const [error, setError] = useState(null)
  const [hover,setHover] = useState(false)
  const [stil,setStil] = useState({ backgroundColor: 'gray' , margin: 10 })

  const ref = useRef(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('resolved', response)
        return response.json()
      }).then(data => {
        console.log(data)
        setUsers(data)
      }).catch((err) => {
        console.log('reject', err)
        console.log('moreInfo.objectId = ', users)
      })
  }, [])

  const handleSingleUsers = (event) => {
    console.log('button is clicked', ' | ', event.target.value )

  }

  const toggleHover = (event) => {

    if (ref && ref.current) {
      // ref.current.addEventListener('click', handleSingleUsers(event), true)
      console.log( 'button is hovered', ' | ' ,'event.target.value = ', event.target.value)
      setStil( { backgroundColor: 'blue', margin: 10 } )
    }
    event.stopPropgation
    setHover(!hover)
  }

  const toggleUnHover = (event) => {
    event.stopPropgation
    if (ref && ref.current) {
      // ref.current.removeEventListener('click', handleSingleUsers, false)
      // ref.current.removeEventListener('hover', handleSingleUsers, false)
      console.log( 'button is unhovered',' | ' ,'event.target.value = ', event.target.value)
      setStil({ backgroundColor: 'red' , margin: 10 })
    }
    setHover(!hover)
  }

  useEffect(() => {
    if (hover) {
      setStil( { backgroundColor: 'red' , margin: 10 } )
    } else {
      setStil({ backgroundColor: 'lightGray', margin: 10 })
    }
  },[hover])

  return (
    <Grid container spacing={2} sx={{ border: 1 , textAlign: 'center', height: '90vh', bgcolor: 'grey', color: 'white' }} >

      <ul>
        {users && Object.keys(users).map((item, i) => (
          <li key={i}>

            <Grid item xs={1}>
              <Typography variant="title" color="inherit">
                {users[item].id}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="title" color="inherit">
                {users[item].name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title" color="inherit">
                {users[item].userName}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="title" color="inherit">
                XS = 5
              </Typography>
            </Grid>

          </li>
        ))}
      </ul>
    </Grid>
  )

}

export default Home

/*
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
*/

/*
<Container sx={{ border: 1 , textAlign: 'center', height: '90vh', bgcolor: 'grey', color: 'white' }} >
<ul>
  {users && Object.keys(users).map((item, i) => (
    <li key={i}>
      <button id={`${i}`} onClick={handleSingleUsers} ref={ref} value = {users[item].id} style={ stil } onMouseEnter={toggleHover} onMouseLeave={toggleUnHover} >{ users[item].name } </button>
    </li>
  ))}
</ul>
</Container>
*/

/*

  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users', requestOptions)
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json()
      setUsers(actualData)

      setError(null)
    } catch (err) {
      setError(err.message)
      setUsers(null)
    } finally {
      setIsLoad(false)
    }
  }

  getData()

  */
/*
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setUsers(json)
    })
    //.then((json) => setUsers(json))

  let tempUsers = users
  //setUsers(tempUsers)

var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

let raw = JSON.stringify({
  users: 'users'
})

var requestOptions = {
  mode: 'no-cors',
  method: 'get',
  header: myHeaders,
  body: raw,
  redirect: 'follow'
}
*/

/*
  {users && users.map((user, idx) =>{
        <li key = {idx}>
          {console.log( 'user Id = ',user.id, 'user name = ', user.name)}
          <span> {user.id} | {user.name} </span>
        </li>
*/

/*
 <Container sx={{ border: 1 , textAlign: 'center', height: '90vh', bgcolor: 'grey', color: 'white' }} >
      <ul>
<a href="https://plainenglish.io" target="_blank" rel="noreferrer">{ users[item].name }</a>.

//   useEffect(() => {

//     fetch('https://jsonplaceholder.typicode.com/users'', requestOptions)
//     .then(response => response.text())
//     .then(result => console.log('result = ', result))
//     .catch(error => console.log('error = ', error))

//   if (responseOk) {
//     navigate('/')
//   }

//   navigate('/')
// }
// }

  /*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('resolved', response)
        return response.json()
      }).then(data => {
        console.log(data)
        setUsers(data)
      }).catch((err) => {
        console.log('reject', err)
        console.log('moreInfo.objectId = ', users)
      })
  }, [])
  */

/*
  <ListItem disablePadding >
              <SvgIcon ><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>
              {t('Name')}</ListItem>
*/

/*
      <ul className={classes.uli}>

        {countries && countries.map((item, idx) => (
          <li className={classes.li} key={item.cca3}>

            <h3 className={classes.h3} >
              <span className= {classes.cca3}> | {idx + 1} |</span>
              <span className= {classes.cca3}> |{item.cca3}|</span>
              |<button className={classes.divFlag} value={item.flags.svg} onClick= {handleFlag(item)} >
                {item.flag}
              </button>|
              |{item.idd.root === '+1' ? [item.idd.root] : [item.idd.root, item.idd.suffixes]}|
              |{item.name.official}|
              |{item.capital}|
              |{<a href={item.maps.googleMaps}> Google-Maps</a>}
            </h3>
            <>{item.flags.svg === flagRes && <FlagComponent value={'allFlag'}/>}</>
            {item.flags.svg === flagRes && <PopupCountry />}
          </li>

        ))}
      </ul>
*/

/*
    {t('Welcome to React template')}
      <Grid>

        {users && users.map((user) =>{
          {console.log('user.name = ', user.name)}
          <>
            <ListItemText
              style={{ color: 'black', fontSize: '17px' }}
              key={user.id}
              primary={user.name}
              secondary={<React.Fragment>
                <Typography
                  sx={{ display: 'inline', colors: 'white' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <Typography marginTop='10px'>{t('Username')}</Typography>
                  {user.username}

                  <Typography marginTop='10px' marginBottom='60px'>
                            email:<br/>
                    {user.email}
                  </Typography>
                </Typography>
              </React.Fragment>} />
          </>
        }

        )}
      </Grid>
*/

