import React ,{ useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Modal, Box, IconButton } from '@mui/material'

import ActualPage from 'components/ActualPage/ActualPage'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PageControl from 'components/PageControl/PageControl'
import Delete from 'components/Delete/Delete'
//import DeleteIcon from '@mui/icons-material/Delete'
import ModalComp from 'components/ModalComp'
import UserUsername from 'components/UserUsername/UserUsername'
import HeaderList from 'components/HeaderList'
import ShowStatus from 'components/ShowStatus'
import Title from 'components/Title'

const AllPosts = () => {

  const [pageSize, setPageSize] = useState(10)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [colorBackground, setColorBackground] = useState ('#fff')
  const [arrayForDelete, setArrayForDelete] = useState ([])
  const [disabledIconButton, setDisabledIconButton] = useState(true)
  let tempPosts = posts
  const [tempArray, setTempArray] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')
  const [dellayTime, setDellayTime] = useState(false)
  // const [avatar, setAvatar] = useState(false)
  // const [src, setSrc] = useState('')
  // const [userName, setUserName] = useState('')
  const [users, setUsers] = useState([])

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
        setPosts(await response.json())
      } catch (err) {
        setError(err.message)
        setPosts([])
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

  // console.log( 'AllPosts users =', users)
  posts.forEach((post) => {

    // console.log('post.userId = ', post.userId)
    let userTemp = (users?.find(user => user.id === post.userId))
    // console.log('AllPosts -  userTemp = ', userTemp)
    post.name = userTemp.name
    //  console.log('77 post.userId = ', post.userId, post.userName)
    // console.log('AllPosts - UserName = ' ,post.userName)
    //post.lowSrc = '/' + (post.userId) + 'Low.png'
    post.src = '/' + (post.userId) + 'Big.png'
  }
  )

  let from = (page - 1) * pageSize
  let to = from + pageSize

  const actualPage = posts.slice(from, to)

  // const handleAvatar = (src, name) => {
  //   console.log('handleAvatar src  =', src)
  //   setUserName(name)
  //   setSrc(src)
  //   setAvatar(!avatar)

  // }
  // const handleCloseAvatar = () => {
  //   setAvatar(!avatar)
  // }

  const handleItem = (userId, itemId, name, src) => {
    navigate(`/users/${userId}/posts/${itemId}`,{ state: { name: name, src: src } })
    //navigate('/yourUrl/', { state: { id: 7, color: 'green' } })
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
      fetch(`https://jsonplaceholder.typicode.com/posts/${item}`, {
        method: 'DELETE', })
        .then((response) => {

          if (response.ok === true) {
            setResponseStatus (response.status)
            setResponseOk(response.ok)
            setDellayTime(true)
            //console.log('item', item , 'deleted ', 'status = ',response.status , 'ok = ',response.ok)
            setTimeout(() => {
              setDellayTime(false)
            }, 4000)

          }})
        .catch((err) => {
          console.log('reject', err)
        })
      tempPosts = [ ...tempPosts.filter((post)=> post.id != item) ]
    })
    setPosts(tempPosts)
    setArrayForDelete([])
    setTempArray([])
    setDisabledIconButton(true)
    setColorBackground('#cddccd')
  }

  const numberOfPages = Math.ceil(posts.length / pageSize)
  const allSize = [5,10,20]

  return (
    <Grid container
      direction="column"
      marginTop={7}
      padding={5}
      //rowheight={10}
      backgroundColor={'#cddccd' }
      spacing={2}
    > ... ALL  POSTS ...- presented list of all posts

      <Title text='ALL POSTS' />

      <Grid item>
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'posts'}/>}
        {/* {avatar && <ModalComp onClose={handleCloseAvatar} src={src} userName={post} /> } */}
        <HeaderList
          widths={[0.5,1,1,9]}
          names={['A','USER ID','POST ID', 'POST TITLE']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          marginX={'auto'}
          role={'posts'}
          handleItem={handleItem}
          allForDelete={allForDelete}
        />
      </Grid>

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
export default AllPosts

/*

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(0.8),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflow: 'hidden',
  }))

  <Grid item xs={8} mx={10} >
        <Item >
        ALL POSTS {disabledIconButton === true ? 'true' : 'false'}
        </Item>
      </Grid>

      {dellayTime && responseOk &&
        <Grid container direction='row' >
          <Grid item xs={10} m='auto' >
            <Item bgcolor = {'green'} > Status - {responseStatus} - All Posts-s that have been checked is successfully deleted </Item>
          </Grid>
        </Grid>
      }
      {avatar &&
        <Grid container >
          <Grid item >
            <ModalComp
              onClose={handleCloseAvatar}
              src = {src}
              // userName = {userName}
            />
          </Grid>
        </Grid>
      }

      <Grid item my={5}>
        <Grid container direction='row' >
          <Grid item xs={0.5}><Item > A </Item></Grid>
          <Grid item xs={1}><Item > USER ID </Item></Grid>
          <Grid item xs={1}><Item > POST ID </Item></Grid>
          <Grid item xs={9} ><Item > POST TITLE  userName = {userName}</Item></Grid>
          <Delete title='Are you sure ?' disabled={disabledIconButton} onClick={handleDelete} />
        </Grid>
      </Grid>
*/
