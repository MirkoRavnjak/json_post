import React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'common/i18n'
import { Grid } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'

import ActualPage from 'components/ActualPage'
import PageControl from 'components/PageControl'

import ModalComp from 'components/ModalComp'

import ShowStatus from 'components/ShowStatus'
import Title from 'components/Title'
import HeaderList from 'components/HeaderList'

const Users = () => {

  // const { userid } = useParams()
  const { t } = useTranslation()
  const [ users, setUsers] = useState([])

  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)
  const [disabledIconButton, setDisabledIconButton] = useState(true)
  const [colorBackground, setColorBackground] = useState ('#fff')
  const [arrayForDelete, setArrayForDelete] = useState ([])

  let tempUsers = users
  const [tempArray, setTempArray] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')
  const [dellayTime, setDellayTime] = useState(false)
  // const [avatar, setAvatar] = useState(false)
  // const [src, setSrc] = useState('')
  // const [userName, setUserName] = useState('')

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

  users.forEach((user) => {
    // console.log( user.id)
    //user.lowSrc = '/' + (user.id) + 'Low.png'
    user.src = '/' + (user.id) + 'Big.png'
    //console.log( user.id, user.lowSrc, user.bigSrc )
  })

  let from = (page - 1) * pageSize
  let to = from + pageSize
  let actualPage = users.slice(from, to)
  console.log('All users 74  - actual page = ', actualPage)

  const handleItem = ( userid, src) => {
    console.log('Users  userid = ', userid,' item.name = ', name ,'item.bigSrc = ', src)
    navigate(`/users/${userid}`, { state: { src: src } })
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
      fetch(`https://jsonplaceholder.typicode.com/posts/${item}`, {
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
      tempUsers = [ ...tempUsers.filter((user)=> user.id != item) ]
    })
    setUsers(tempUsers)
    setArrayForDelete([])
    setTempArray([])
    setDisabledIconButton(true)
    setColorBackground('#cddccd')
  }

  const allSize = [5,10,20]
  const numberOfPages = Math.ceil(tempUsers.length / pageSize)

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
      ... - Users - presented list of all users ... responseStatus= {responseStatus}

      <Title text='ALL USERS'/>

      <Grid item>
        {dellayTime && responseOk && <ShowStatus responseStatus={responseStatus} text={'posts'}/>}
        <HeaderList
          widths={[0.5,1,5,2,3]}
          names={['A','USER ID','NAME', 'USER NAME','e-mail']}
          disabled={disabledIconButton}
          onClick={handleDelete}
        />
      </Grid>

      <Grid item>
        <ActualPage
          actualPage={actualPage}
          page={page}
          marginX={'auto'}
          role={'users'}
          handleItem={handleItem}
          allForDelete={allForDelete}
        />
      </Grid>

      <Grid item >
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
export default Users

