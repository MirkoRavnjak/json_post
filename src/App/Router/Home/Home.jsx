import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'common/i18n'
//import { experimentalStyled as styled } from '@mui/material/styles'
//import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import User from 'components/User/User'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const Home = () => {

  const { t } = useTranslation()
  const [ users, setUsers] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const [error, setError] = useState(null)
  const [hover,setHover] = useState(false)
  const [stil,setStil] = useState({ backgroundColor: 'gray' , margin: 10 })
  const [message, setMessage] = useState('')
  const [idUser , setIdUser] = useState(null)

  const ref = useRef(false)

  const userData = (id, name, username) => {
    return { id, name, username }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'username', headerName: 'USER NAME', width: 300 },
  ]

  var rows = []
  var row = []

  users.map((user) => {
    row.push(user.id)
    row.push(user.name)
    row.push(user.username)
    rows.push(user)
  })

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

  useEffect(() => {
    if (hover) {
      setStil( { backgroundColor: 'red' , margin: 10 } )
    } else {
      setStil({ backgroundColor: 'lightGray', margin: 10 })
    }
  },[hover])

  const handleRowClick = (params) => {
    console.log(`User "${params.row.id}" clicked`)
    {<User parId= {params.row.id} />}
  }

  return (
    <Grid container sx= {{ height: '78vh', bgcolor: 'grey', color: 'white' }} >
      <DataGrid
        rows={rows}
        columns = { columns }
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
      />
    </Grid>
  )

}
export default Home

/*
  const rows = [

    Object.keys(users).map((item, i) => (

      createData(item.id, item.name, item.username)
    ))
  ]
*/
