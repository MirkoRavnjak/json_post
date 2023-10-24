import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl/PageControl'
import ShowStatus from 'components/ShowStatus/ShowStatus'
import Title from 'components/Title/Title'
import HeaderList from 'components/HeaderList/HeaderList'

const AllTodos = () => {

  console.log('... All todos...')
  const navigate = useNavigate()

  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  const [colorBackground, setColorBackground] = useState ('#fff')
  const [arrayForDelete, setArrayForDelete] = useState ([])
  const [disabledIconButton, setDisabledIconButton] = useState(true)
  let tempTodos = todos
  const [tempArray, setTempArray] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')
  const [dellayTime, setDellayTime] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      setError(null)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        let data = await response.json()
        console.log( 'All todos - data = ', data)
        setTodos(data)
      } catch (err) {
        setError(err.message)
        setTodos([])
        alert ('reject', error)
      }
    }
    getData()
  }, [])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      }).then(data => {
        setUsers(data)
      }).catch((err) => {
        console.log('reject', err)
      })
  }, [])

  todos.forEach((todo) => {
    let userTemp = (users?.find(user => user.id === todo.userId))
    todo.name = userTemp.name
    todo.src = '/' + (todo.userId) + 'Big.png'
  })

  let from = (page - 1) * pageSize
  let to = from + pageSize
  const actualPage = todos.slice(from, to)

  const handleItem = (userid, todoid, name, src) => {
    navigate(`/users/${userid}/todos/${todoid}`,{ state: { name: name, src: src } })
  }

  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    setPageSize(value)
    setPage(1)
  }
  const allForDelete = ( itemid ) => {
    let find = arrayForDelete.find((item) => item === itemid)
    if (find){
      let temp = arrayForDelete.filter(item => item != find)
      setArrayForDelete(temp)
      if (temp.length === 0){
        setDisabledIconButton(true)
        setColorBackground('#cddccd')
        temp = []
        setArrayForDelete([])
        setTempArray([])
      }
    } else {
      setDisabledIconButton(false)
      setColorBackground('#f7eaea')
      let temp = tempArray
      temp.push(itemid)
      setArrayForDelete(temp)
    }
  }

  const handleDelete = () => {
    arrayForDelete.map((item) =>{
      fetch(`https://jsonplaceholder.typicode.com/albums/${item}`, {
        method: 'DELETE', })
        .then((response) => {
          let resStatus = response.status
          // console.log('users fetch', 'status = ',resStatus, typeof (resStatus) , 'ok = ',response.ok)
          if (response.ok === true) {
            setResponseStatus (resStatus)
            setResponseOk(true)
            setDellayTime(true)
            setTimeout(() => {
              setDellayTime(false)
            }, 4000)
          }})
        .catch((err) => {
          console.log('reject', err)
        })
      tempTodos = [ ...tempTodos.filter((todo)=> todo.id != item) ]
    })
    setTodos(tempTodos)
    setArrayForDelete([])
    setTempArray([])
    setDisabledIconButton(true)
    setColorBackground('#cddccd')
  }
  const numberOfPages = Math.ceil(todos.length / pageSize)
  const allSize = [5,10,20]

  return (
    <Grid
      container
      direction="column"
      spacing={1}
      mt={5}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
      height={'70%'}
    >   ... ALL  Todos ... presented list of all todos ... responseStatus = {responseStatus}

      <Title text='ALL TODOS'/>

      <Grid item>
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'todos'}/>}
        <HeaderList
          widths={[0.5, 1, 1, 7, 2]}
          names={['A','USER ID', 'TODO ID','TODO TITLE', 'COMPLETED']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          page={page}
          marginX={'auto'}
          role={'todos'}
          handleItem={handleItem}
          allForDelete={allForDelete}
        />
      </Grid >

      <Grid item>
        <PageControl
          numberOfPages={numberOfPages}
          allSize={allSize}
          pageSize={pageSize}
          page={page}
          handlePageSize={handlePageSize}
          handlePageChange={handlePageChange}
        />
      </Grid>
    </Grid>

  )
}

export default AllTodos

