import React from 'react'

import { Grid, Paper } from '@mui/material'
import { PropTypes } from 'prop-types'

import Delete from 'components/Delete'
import { styled } from '@mui/material/styles'

const HeaderList = (props) => {

  const widths = props.widths
  const names = props.names
  const disabled = props.disabled
  const handleDelete = props.onClick

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

    <Grid container direction='row' >

      {widths?.map((width, index) => (
        <Grid item key={index} xs={width} mx='auto' >
          <Item > {names[index]} </Item>
        </Grid>
      ))}

      <Delete title='Are you sure ?' disabled={disabled} onClick={handleDelete} />
    </Grid>

  )
}
export default HeaderList

HeaderList.propTypes = {
  widths: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

