import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import UserUsername from 'components/UserUsername/UserUsername'
import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl/PageControl'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Todos = () => {

  const navigate = useNavigate()
  const { userid } = useParams()
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}/todos`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setTodos(data)
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

  let from = (page - 1) * pageSize
  let to = from + pageSize

  const actualPage = todos.slice(from, to)

  const handleItem = (userId, todoId) => {
    navigate(`/users/${userId}/todos/${todoId}`)
  }

  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    if (todos.length < value) {
      setPageSize(todos.length)
    } else {setPageSize(value)}
    setPage(1)
  }

  const numberOfPages = Math.ceil(todos.length / pageSize)
  const allSize = [5,10,20,50]

  return (
    <Grid container direction="column"
      marginTop={5}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    > ... User - All todos ...
      <Item
        key={userid}
        sx={{ minHeight: 23, textAlign: 'center',width: '80%' ,margin: '0 auto' }}>
        <UserUsername userid={userid} />
      </Item>
      <Grid container direction='row'>
        <Grid item xs={1} ><Item > USER ID </Item></Grid>
        <Grid item xs={1} ><Item > TODO ID </Item></Grid>
        <Grid item xs={5} md={8} ><Item > TODO TITLE </Item></Grid>
        <Grid item xs={1} md={2} ><Item > COMPLETED </Item></Grid>
      </Grid>

      <ActualPage
        actualPage={actualPage}
        page={page}
        marginX='auto'
        role={'todos'}
        handleItem={handleItem}/>

      <PageControl
        numberOfPages={numberOfPages}
        allSize={[allSize]}
        pageSize={pageSize}
        page={page}
        handlePageSize={handlePageSize}
        handlePageChange={handlePageChange}
      />

    </Grid>

  )
}

export default Todos
