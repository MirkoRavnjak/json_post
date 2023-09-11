import React from 'react'
import { Grid, InputLabel, FormControl, Select, MenuItem, Pagination } from '@mui/material'
import PropTypes from 'prop-types'

const PageControl = ( props ) => {

  const numberOfPages = props.numberOfPages
  const pageSize = props.pageSize
  const [allSize] = props.allSize
  const page = props.page
  const handlePageSize = props.handlePageSize
  const handlePageChange = props.handlePageChange

  return (
    <Grid container direction='row' height={35} mt={2} mx={'auto'} sx={{ width: '80%', backgroundColor: '#eeefee' }}>
      <Grid item xs={2} ></Grid>

      <InputLabel id="input-label" margin='dense' sx={{ paddingTop: '7px' }} >Page size</InputLabel>

      <FormControl sx={{ width: 120 }} >
        <Select
          variant="standard"
          sx={{ maxHeight: 35, textAlign: 'center' }}
          defaultValue={pageSize}
          value={pageSize}
          label="PageSize" >
          {allSize.map((option) => (
            <MenuItem key={option} value={option} sx={{ paddingLeft: '40%' }} onClick={()=>handlePageSize(option)}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid item>
        <Pagination count={numberOfPages} page={page} onChange={handlePageChange} />
      </Grid>
    </Grid>

  )
}
export default PageControl

PageControl.propTypes = {
  page: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  allSize: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handlePageSize: PropTypes.func.isRequired

}
