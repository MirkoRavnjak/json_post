import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Grid } from '@mui/material'

import PropTypes from 'prop-types'

const Delete = (props) => {
  const handleDelete = props.onClick
  const disabledIconButton = props.disabled

  return (
    <Grid item xs={0.5}>
      <IconButton title='Are you sure ?' disabled = {disabledIconButton} edge={'start'} onClick={handleDelete} style={{ marginLeft: '-7px' }}>
        <DeleteIcon xs={{ marginLeft: '5px' }} ml={1}>{disabledIconButton}</DeleteIcon>
      </IconButton>
    </Grid>
  )
}
export default Delete

Delete.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
