import React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'common/i18n'
import { styled } from '@mui/material/styles'
import { Grid , Paper } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'

//import { DataGrid } from '@mui/x-data-grid'
import UserUsername from 'components/UserUsername/UserUsername'
import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl/PageControl'

const Users = () => {

  const { userid } = useParams()
  const { t } = useTranslation()
  const [ users, setUsers] = useState([])

  const navigate = useNavigate()

  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)

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

  let from = (page - 1) * pageSize
  let to = from + pageSize

  const actualPage = users.slice(from, to)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflowY: 'hidden',
  }))

  const handleItem = (userid) => {
    navigate(`/users/${userid}`)
  }
  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    if (users.length < value) {
      setPageSize(users.length)
    } else {setPageSize(value)}
    setPage(1)
  }

  const numberOfPages = Math.ceil(users.length / pageSize)
  const allSize = [5,10,20,users.length]

  return (

    <Grid
      container
      spacing={1}
      mt={5}
      padding={5}
      direction="column"
      rowheight={10}
      backgroundColor={'#cddccd' }
    >...User All...

      <Grid item >
        <Item
          key={userid}
          sx={{ minHeight: 23, textAlign: 'center',width: '80%' ,margin: '0 auto' }}>
          ALL USERS
        </Item>
      </Grid>

      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1}><Item > USER ID </Item></Grid>
          <Grid item xs={4} md={5} lg={6}><Item > NAME </Item></Grid>
          <Grid item xs={2} ><Item >USER NAME</Item></Grid>
          <Grid item xs={3} ><Item >e-mail</Item></Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          page={page}
          marginX={'auto'}
          role={'users'}
          handleItem={handleItem}
        />
      </Grid>

      <Grid item>
        <PageControl
          numberOfPages={numberOfPages}
          allSize={[allSize]}
          pageSize={pageSize}
          page={page}
          handlePageSize={handlePageSize}
          handlePageChange={handlePageChange}
        />
      </Grid>

    </Grid>

  )

}
export default Users

/*
 const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
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

<Grid container >
      <Grid item>
        <DataGrid
          marginLeft={10}
          rows={rows}
          columns = { columns }
          onRowClick={()=>handleRowClick(row[0])}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
        />
      </Grid>
    </Grid>
*/
