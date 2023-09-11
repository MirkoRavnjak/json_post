import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Error = () => {
  const navigate = useNavigate()

  return (
    <>
      <div style={ { border: '1px solid red' , background: '#f00' }}>
        <h2>404</h2>
        <p> Page not exists in this project</p>

      </div>
      <Button container="true" sx= {{ bgcolor: 'grey', color: 'green' ,border: '1px solid blue' , margin: 1 }} onClick={()=> {navigate('/')}} >BACK TO HOME PAGE</Button>
    </>
  )
}

export default Error
