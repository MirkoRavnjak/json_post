import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

const UserUsername = ( props ) => {

  const userId = parseInt(props.userId)
  // console.log('UserUSername - userid = ', props.userId,'type = ',typeof (userId) )
  const [name , setName] = useState('')
  //console.log('UserUserName.name = ', userName)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
      //  console.log('UserUsername .response.json =',response.json)
        return response.json()
      }).then(data => {
        // console.log('UserUsername .response.data.name =',data.name)
        setName(data.name)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)

      })
  }, [userId])

  // console.log('UserUSername - userid = ', props.userId,'type = ',typeof (userId) )
  //console.log('UserUserName - name = ', name)
  return (

    <Grid item mx='auto'>
      {name}
    </Grid>

  )
}
export default UserUsername

UserUsername.propTypes = {

  userId: PropTypes.string.isRequired,
}
