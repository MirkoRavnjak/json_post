import React ,{ useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Grid, Box } from '@mui/material'
// import { styled } from '@mui/material/styles'
// import Paper from '@mui/material/Paper'
// import UserUsername from 'components/UserUsername/UserUsername'
import ActualPage from 'components/ActualPage/ActualPage'
import PageControl from 'components/PageControl/PageControl'
import Title from 'components/Title/Title'
import ShowStatus from 'components/ShowStatus/ShowStatus'
import HeaderList from 'components/HeaderList/HeaderList'

const Albums = () => {

  const params = useParams()
  const userid = params.userid
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state
 
  const name = state.name
  const src = state.src

  const [albums, setAlbums] = useState([])
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

  let tempAlbums = albums

  useEffect(() => {
    fetch( `https://jsonplaceholder.typicode.com/users/${userid}/albums`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setAlbums(data)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)
      })
  }, [userid])

  albums.forEach((album) => {
    album.name = name
    album.src = src
  })

  let from = (page - 1) * pageSize
  let to = from + pageSize
  const actualPage = albums.slice(from, to)

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

  const handleItem = (userid, albumid, name, src) => {
    navigate(`/users/${userid}/albums/${albumid}`, { state: { name: name , src: src } })
  }
  const handlePageChange = (event, page)=>{
    setPage(page)
  }

  const handlePageSize = (value) => {
    if (albums.length < value) {
      setPageSize(albums.length)
    } else {setPageSize(value)}
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
      mt={8}
      padding={3}
      rowheight={10}
      backgroundColor={'#cddccd' }
    >..  - Albums - ...  presented all albums of single users ... name Temp = {state.name} {responseStatus}

      <Grid
        container
        direction="row"
        mt={8}
        padding={3}
        // rowheight={10}
        backgroundColor={'#cddccd' }
      >

        <Title text={`ALL ALBUMS OF USER ${name}`} />

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
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'albums'}/>}
        <HeaderList
          widths={[0.5,1,1,9]}
          names={['A','USER ID','ALBUM ID', 'ALBUM TITLE']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          page={page}
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

export default Albums

/*
      <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1}><Item > USER ID </Item></Grid>
          <Grid item xs={1} ><Item > ALBUM ID </Item></Grid>
          <Grid item xs={5} md={10} ><Item > ALBUM TITLE </Item></Grid>
        </Grid>
      </Grid>

           {/* <Grid item xs={8} mx={10} >
        <Item >
          <UserUsername userid={userid} />
        </Item>
      </Grid>

          {/* <Grid item key={state.name} xs={7} m={1} pt={9} >
              <Title
                islink={true}
                text={state.name}
                textId={userid}
                handleUserNavigate={handleUserNavigate} />
            </ Grid>

              {/* <Grid item>
        <Grid container direction='row'>
          <Grid item xs={1}><Item > USER ID </Item></Grid>
          <Grid item xs={1} ><Item > ALBUM ID </Item></Grid>
          <Grid item xs={5} md={10} ><Item > ALBUM TITLE </Item></Grid>
        </Grid>
      </Grid>
        padding={3}
        backgroundColor={'#cddccd' }
      >

      */
