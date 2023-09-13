import React ,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import UserUsername from 'components/UserUsername/UserUsername'
import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl/PageControl'

const Posts = () => {

  const { userid } = useParams()

  const [posts, setPosts] = useState([])
  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch( `https://jsonplaceholder.typicode.com/users/${userid}/posts`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setPosts(data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [userid])

  let from = (page - 1) * pageSize
  let to = from + pageSize

  const actualPage = posts.slice(from, to)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflowY: 'hidden',
  }))

  const handleItem = (userid, postid) => {
    navigate(`/users/${userid}/posts/${postid}`)
  }
  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    if (posts.length < value) {
      setPageSize(posts.length)
    } else {setPageSize(value)}
    setPage(1)
  }

  const numberOfPages = Math.ceil(posts.length / pageSize)
  const allSize = [5,10,20]

  return (
    <Grid
      container
      direction="column"
      mt={8}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    >...User All Post...

      <Grid item xs={8} mx={10} >
        <Item >
          <UserUsername userid={userid} />
        </Item>
      </Grid>

      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1}><Item > USER ID </Item></Grid>
          <Grid item xs={1} ><Item > POST ID </Item></Grid>
          <Grid item xs={5} md={10} ><Item > POST TITLE </Item></Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          page={page}
          marginX={'auto'}
          role={'posts'}
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

export default Posts
