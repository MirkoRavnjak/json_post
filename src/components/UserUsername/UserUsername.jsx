import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

const UserUsername = ( { userid } ) => {

  console.log('USER USER id = ', userid)

  const [userName , setUserName] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        console.log('USER USER DATA = ', data)
        setUserName(data.name)
        console.log('USER USER NAME', userName)
      }).catch((err) => {
        console.log('reject reason', err)

      })
  }, [userid])

  return (

    <Grid item xs={3} mx='auto'>
      {userName}
    </Grid>

  )
}
export default UserUsername

UserUsername.propTypes = {

  userid: PropTypes.string.isRequired,
}
