import React ,{ useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'

import ActualPage from 'components/ActualPage/ActualPage'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PageControl from 'components/PageControl/PageControl'

const AllPosts = () => {

  const [pageSize, setPageSize] = useState(10)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      setError(null)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        let data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
        setPosts([])
      }
    }
    getData()
  }, [])

  let from = (page - 1) * pageSize
  let to = from + pageSize

  const actualPage = posts.slice(from, to)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.8),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflow: 'hidden',
  }))

  const handleItem = (userId, itemId) => {
    navigate(`/users/${userId}/posts/${itemId}`)
  }

  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    setPageSize(page)
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
      marginTop={7}
      padding={5}
      rowheight={10}
      backgroundColor={'#cddccd' }
    > ... ALL  POSTS ...

      <Grid item xs={8} mx={10} my={2}>
        <Item >
        ALL POSTS
        </Item>
      </Grid>
      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1.5}><Item > USER ID </Item></Grid>
          <Grid item xs={1.5}><Item > POST ID </Item></Grid>
          <Grid item xs={9} ><Item > POST TITLE </Item></Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
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
export default AllPosts
