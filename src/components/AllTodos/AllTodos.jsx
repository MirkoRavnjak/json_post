import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ActualPage from 'components/ActualPage/ActualPage'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PageControl from 'components/PageControl/PageControl'

const AllTodos = () => {

  const navigate = useNavigate()

  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
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

  const handleItem = (userid, todoid) => {
    navigate(`/users/${userid}/todos/${todoid}`)
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
  const allSize = [5,10,20,50,todos.length,250]

  return (
    <Grid container direction="column"
      marginTop={10}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    > ... ALL  todos ...

      <Grid item xs={8} mx={10} my={2} >
        <Item >
         ALL TODOS
        </Item>
      </Grid>

      <Grid container direction='row'>
        <Grid item xs={1} ><Item sx={{ textAlign: 'center' }} > USER ID </Item></Grid>
        <Grid item xs={1} ><Item sx={{ textAlign: 'center' }} > TODO ID </Item></Grid>
        <Grid item xs={5} md={8} ><Item sx={{ textAlign: 'center' }} > TODO TITLE </Item></Grid>
        <Grid item xs={1} md={2} ><Item sx={{ textAlign: 'center' }} > COMPLETED </Item></Grid>
      </Grid>

      <ActualPage
        actualPage={actualPage}
        page={page}
        marginX={'auto'}
        role={'todos'}
        handleItem={handleItem}
      />

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

export default AllTodos
