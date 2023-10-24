import React, { useEffect, useState } from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Title from 'components/Title/Title'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflowY: 'hidden',
}))

const Todo = () => {

  //console.log('... TODO ...')
  const navigate = useNavigate()
  const location = useLocation()
  console.log ( 'Todo ... location = ', location)
  const params = useParams()
  console.log ( 'Todo ... params.state = ', params)
  const userid = params.userid
  const todoid = params.todoid

  const name = location.state.name
  const src = location.state.src

  const [todo, setTodo] = useState([])
  const [error, setError] = useState('')

  const txt = 'Post no. - ' + todoid + '- of user -' + name

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setTodo(data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [todoid])

  return (

    <Grid
      container
      direction="column"
      mt={8}
      p={4}
      backgroundColor={'#cddccd' }
    > ... User one todo...
      <Grid
        container
        direction="row"
        mt={8}
        rowheight={10}
        key={'text'}
        text={txt}
      />
      <Title key={'posttext'} text='ONE TODO OF USER' />

      <Grid item key={'name'} mx={'auto'} xs={10}>

        <Grid key={'name_container'}
          container
          direction="row"
          justifyContent="space-evenly"
          m='auto '
          space={1}
        >
          <Grid item key={src} m={1} xs ={5} >
            <Box >
              <img src={process.env.PUBLIC_URL + src } title = {name} alt= {name} width={'100%'} />
            </Box>
          </Grid>

          <Grid item key={name} xs={3} pt={10}>
            <Title
              islink={true}
              text={name}
              userid={userid}
              src={src}
            />
          </ Grid>
        </Grid>
      </Grid>

      <Grid container direction='row'>
        <Grid item xs={1} ><Item > USER ID </Item></Grid>
        <Grid item xs={1} ><Item > TODO ID </Item></Grid>
        <Grid item xs={8} ><Item > TODO TITLE </Item></Grid>
        <Grid item xs={2} ><Item > COMPLETED </Item></Grid>
      </Grid>

      <Grid container direction='row' key ={todo.id}>

        <Grid item xs={1} >
          <Item > {todo.userId} </Item>
        </Grid>

        <Grid item xs={1} >
          <Item > {todo.id} </Item>
        </Grid>

        <Grid item xs={5} md={8} >
          <Item > {todo.title} </Item>
        </Grid>

        <Grid item xs={1} md={2} >
          {todo.completed ? <Item sx={{ color: 'green' }}> YES </Item> : <Item sx={{ color: 'red' }}> NO </Item>}
        </Grid>

      </Grid>

    </Grid>
  )
}

export default Todo
