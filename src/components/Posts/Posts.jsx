import React ,{ useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl'
import ShowStatus from 'components/ShowStatus'
import HeaderList from 'components/HeaderList'
import Title from 'components/Title'

const Posts = () => {

  //console.log('... POSTs...')
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  //console.log('Posts 19 - params = ', params)
  const userid = params.userid
  //console.log('Posts 19 - userid = ', params.id)

  const state = location.state

  const [posts, setPosts] = useState([])
  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')

  const [colorBackground, setColorBackground] = useState ('#fff')
  const [arrayForDelete, setArrayForDelete] = useState ([])
  const [disabledIconButton, setDisabledIconButton] = useState(true)
  const [tempArray, setTempArray] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')
  const [dellayTime, setDellayTime] = useState(false)
  //const [avatar, setAvatar] = useState(false)
  const [src, setSrc] = useState(state.src)
  const [name, setName] = useState('')
  let tempPosts = posts

  //const nameTemp = useState(<UserUsername useriId= {userid} />)

  useEffect(() => {
    console.log('Posts - user id, state.name, src = ', userid, state.name, state.src)
    setName(state.name)
    setSrc(state.src)
  },[])

  useEffect(() => {
    fetch( `https://jsonplaceholder.typicode.com/users/${userid}/posts`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setPosts(data)
        console.log('Posts 45 - fetch.data  ', data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [userid])

  posts.forEach((post) => {
    post.name = name
    post.src = '/' + (userid) + 'Big.png'
  })

  let from = (page - 1) * pageSize
  let to = from + pageSize
  const actualPage = posts.slice(from, to)

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

  const handleItem = (userid, postid, name, src) => {
    //console.log('Posts 83 - handleItem - userid, postid = ',userid, postid, name, src)
    navigate(`/users/${userid}/posts/${postid}`,{ state: { name: name , src: src } } )
  }

  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    setPageSize(value)
    setPage(1)
  }

  const handleDelete = () => {
    arrayForDelete.map((item) =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${item}`, {
        method: 'DELETE', })
        .then((response) => {
          if (response.ok === true) {
            setResponseStatus(response.status)
            setResponseOk(true)
            setDellayTime(true)
            setTimeout(() => {
              setDellayTime(false)
            }, 4000)
          }})
        .catch((err) => {
          alert('reject', err)
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
    <Grid
      container
      direction="column"
      mt={8}
      p={3}
      backgroundColor={'#cddccd' }
    >...  - Posts - ...  presented all posts of user ... {state.name} {responseStatus}

      <Grid
        container
        direction="row"
        mt={8}
        padding={3}
        backgroundColor={'#cddccd' }
      >

        <Title text={`ALL POSTS OF USER ${state.name}`} />

        <Grid item key={'name'} mx={'auto'} xs={10} >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            m='auto '
            space={1}
          >

            <Grid item key={state.src} m={1} xs={5} >
              <Box >
                <img src={process.env.PUBLIC_URL + src } title = {name} alt= {name} width={'100%'} />
              </Box>
            </Grid>

            <Grid item key={state.name} xs={4} my={'auto'} mx={'auto'} pt={5} >
              <Title
                text={state.name}
                userid={userid}
                islink={true}
                src={src} />
            </ Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid item key={'header'}>
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'posts'}/>}
        <HeaderList
          widths={[0.5,1,1,9]}
          names={['A','USER ID','POST ID', 'POST TITLE']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item key= {'page'}>
        <ActualPage
          actualPage={actualPage}
          page={page}
          marginX={'auto'}
          role={'posts'}
          handleItem={handleItem}
          allForDelete={allForDelete}
        />
      </Grid>

      <Grid item mb={3} mx={'auto'}>
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

export default Posts

