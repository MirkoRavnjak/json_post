import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'common/i18n'
//import { experimentalStyled as styled } from '@mui/material/styles'
//import Paper from '@mui/material/Paper'
//import Grid from '@mui/material/Grid'
import { Grid, Box } from '@mui/material'
import Detail from 'components/Detail/Detail'
import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import { userIdAtom } from 'store/atoms/shared.atom'
import { Button } from '@mui/material'

const Home = () => {

  const { id } = useParams()
  const { t } = useTranslation()
  const [ users, setUsers] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const [error, setError] = useState(null)
  const [hover,setHover] = useState(false)
  const [stil,setStil] = useState({ backgroundColor: 'gray' , margin: 10 })
  const [message, setMessage] = useState('')
  const [idUser , setIdUser] = useState(null)
  const navigate = useNavigate()

  const controller = new AbortController()
  // const signal = controller.signal

  const [userIdstate, setUserIdstate] = useRecoilState(userIdAtom)

  function handleClick() {
    navigate('/detail')
  }

  const ref = useRef(false)

  const userData = (id, name, username) => {
    return { id, name, username }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'username', headerName: 'USER NAME', width: 300 },
    { field: 'posts', headerName: 'POSTS' ,width: 200 }
  ]

  var rows = []
  var row = []

  users.map((user) => {
    row.push(user.id)
    row.push(user.name)
    row.push(user.username)
    row.push(user.d)
    rows.push(user)
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users',{ 'signal': controller.signal })
      .then((response) => {
        console.log('resolved', response)
        return response.json()
      }).then(data => {
        console.log('fetsh response data = ', data)
        setUsers(data)
      }).catch((err) => {
        console.log('reject', err)
        console.log('moreInfo.objectId = ', users)
      })
  }, [])

  const handleRowClick = (params) => {
    console.log(`User "${params.row.id}" clicked`)
    // setUserIdstate(params.row.id)
    controller.abort()
    navigate(`/detail/${params.row.id}`)
  }

  const postClick = (event) => {
    console.log('event.target.value = ', event.target.value)
    // navigate(`/posts/${event}`)
  }

  return (
    <><Grid container height={'90vh'} sx= {{ bgcolor: 'grey', color: 'white' ,border: '1px solid blue' }} >
      <DataGrid
        sx= {{ bgcolor: 'grey', color: 'white' ,border: '1px solid blue' }}
        rows={rows}
        columns = { columns }
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </Grid>

    </>
  )

}
export default Home

/*
  const rows = [

    Object.keys(users).map((item, i) => (

      createData(item.id, item.name, item.username)
    ))
  ]

   const handleSingleUsers = (event) => {
    console.log('button is clicked', ' | ', event.target.value )

  }

  useEffect(() => {
    if (hover) {
      setStil( { backgroundColor: 'red' , margin: 10 } )
    } else {
      setStil({ backgroundColor: 'lightGray', margin: 10 })
    }
  },[hover])
*/
