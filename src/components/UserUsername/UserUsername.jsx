import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

const UserUsername = ( { userid } ) => {

  const [userName , setUserName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((response) => {
        return response.json()
      }).then(data => {
        setUserName(data.name)
      }).catch((err) => {
        setError(err.message)
        alert ('reject', error)

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
