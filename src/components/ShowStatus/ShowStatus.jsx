import React from 'react'

import { Grid, Paper } from '@mui/material'
import { PropTypes } from 'prop-types'
import { styled } from '@mui/material/styles'

const ShowStatus = (props) => {
  const responseStatus = props.responseStatus
  const text = props.text

  console.log ('ShowStatus . props = ', props)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 3,
    overflow: 'hidden',
  }))

  return (

    <Grid container direction='row' heigth={'50px'} >
      <Grid item xs={9} bgcolor={'green'} mx='auto' >
        <Item> Status - {responseStatus} - All - {text}`s - that have been checked is successfully deleted
        </Item>
      </Grid>
    </Grid>

  )
}
export default ShowStatus

ShowStatus.propTypes = {
  responseStatus: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
