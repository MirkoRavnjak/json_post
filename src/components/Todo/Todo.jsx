import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'

import UserUsername from 'components/UserUsername/UserUsername'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Todo = () => {

  const { userid, todoid } = useParams()
  const [todo, setTodo] = useState([])
  const [error, setError] = useState('')

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
  }, [])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflowY: 'hidden',
  }))

  return (

    <Grid container direction="column"
      marginTop={7}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    > ... User one todo...
      <Grid item xs={8} mx={10} >
        <Item >
          <UserUsername userid={userid} />
        </Item>
      </Grid>

      <Grid container direction='row'>
        <Grid item xs={1} ><Item > USER ID </Item></Grid>
        <Grid item xs={1} ><Item > TODO ID </Item></Grid>
        <Grid item xs={5} md={8} ><Item > TODO TITLE </Item></Grid>
        <Grid item xs={1} md={2} ><Item > COMPLETED </Item></Grid>
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
