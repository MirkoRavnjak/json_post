import React ,{ useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'

import ActualPage from 'components/ActualPage/ActualPage'
import ShowStatus from 'components/ShowStatus/ShowStatus'
import Title from 'components/Title/Title'
import HeaderList from 'components/HeaderList/HeaderList'

import PageControl from 'components/PageControl/PageControl'

const AllAlbums = () => {

  console.log('... All Albums...')

  const [pageSize, setPageSize] = useState(10)
  const [albums, setAlbums] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [colorBackground, setColorBackground] = useState ('#fff')
  const [arrayForDelete, setArrayForDelete] = useState ([])
  const [disabledIconButton, setDisabledIconButton] = useState(true)
  let tempAlbums = albums
  const [tempArray, setTempArray] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')
  const [dellayTime, setDellayTime] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      setError(null)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        let data = await response.json()
        console.log( 'All albums - data = ', data)
        setAlbums(data)
      } catch (err) {
        setError(err.message)
        setAlbums([])
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

  albums.forEach((album) => {
    let userTemp = (users?.find(user => user.id === album.userId))
    album.name = userTemp.name
    album.src = '/' + (album.userId) + 'Big.png'
  }
  )

  let from = (page - 1) * pageSize
  let to = from + pageSize
  const actualPage = albums.slice(from, to)

  const handleItem = ( userid, itemid, name, src) => {
    // console.log('AllAlbums -  handleItem | userId = ',userid, '| itemId = ', itemid, '| name = ', name, '| src = ', src)
    navigate(`/users/${userid}/albums/${itemid}`,{ state: { name: name, src: src } })
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
          console.log('users fetch', 'status = ',resStatus, typeof (resStatus) , 'ok = ',response.ok)
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
      tempAlbums = [ ...tempAlbums.filter((album)=> album.id != item) ]
    })
    setAlbums(tempAlbums)
    setArrayForDelete([])
    setTempArray([])
    setDisabledIconButton(true)
    setColorBackground('#cddccd')
  }

  const numberOfPages = Math.ceil(albums.length / pageSize)
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
      height={'80%'}
    >
     ... ALL  Albums ... presented list of all albums ... responseStatus = {responseStatus}

      <Title text='ALL ALBUMS'/>

      <Grid item>
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'albums'}/>}
        <HeaderList
          widths={[0.5, 1, 1, 9]}
          names={['A','USER ID', 'ID','ALBUM TITLE']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          marginX={'auto'}
          role={'albums'}
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
export default AllAlbums

/*
  albums.forEach((album) => {

    // console.log('album.userId = ', album.userId)
    let userTemp = (users?.find(user => user.id === album.userId))
    // console.log('AllPosts -  userTemp = ', userTemp)
    album.name = userTemp.name
    //  console.log('77 post.userId = ', post.userId, post.userName)
    // console.log('AllPosts - UserName = ' ,post.userName)
    album.lowSrc = '/' + (album.userId) + 'Low.png'
    album.bigSrc = '/' + (album.userId) + 'Big.png'
  }
  )

   {/* <Grid item xs={8} mx={10} my={2} >
        <Item >
        ALL ALBUMS
        </Item>
      </Grid>
      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1.5}><Item > US.ID </Item></Grid>
          <Grid item xs={1.5}><Item > ID </Item></Grid>
          <Grid item xs={9}>  <Item > ALBUM TITLE </Item></Grid>
        </Grid>
      </Grid>

      <Grid item m={1} xs ={5} >
        </Grid><Grid item key={album.id} m={1} xs ={5} >
        <Box >
          <img src={process.env.PUBLIC_URL + src } title = {name} alt= {name} width={'100%'} />
        </Box>
      </Grid>

      <Grid item key={name} xs={3} pt={10}>
        <Title
          islink={true}
          text={name}
          //userid={userid}
          // src={src}
        />
      </ Grid>

*/
