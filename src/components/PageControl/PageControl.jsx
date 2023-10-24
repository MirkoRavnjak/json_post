import React from 'react'
import { Grid, InputLabel, FormControl, Select, MenuItem, Pagination } from '@mui/material'
import PropTypes from 'prop-types'

const PageControl = ( props ) => {

  const numberOfPages = props.numberOfPages
  const pageSize = props.pageSize
  const allSize = props.allSize
  // console.log('props.allSize = ',props.allSize,'allSize = ',allSize)
  const page = props.page
  const handlePageSize = props.handlePageSize
  const handlePageChange = props.handlePageChange

  return (

    <Grid
      container
      direction='row'
      position= {'fixed'}
      bottom = {'75px'}
      left ={'25%'}
      mt={2}
      paddingX={'auto'}
      sx={{ width: '50%', border: '1px solid #5c7b5c', backgroundColor: '#d0d8d0' , borderRadius: '4px', boxShadow: '5px' }}
      //sx={{ width: '50%', backgroundColor: '#eeefee', marginX: 'auto' }}
    >
      {/* <Grid item sx={{ width: '25%' }} ></Grid> */}
      {/* <Grid container direction='column' height={35} sx={{ width: '25%' }} px={'10%'}> */}

      <Grid item xs={2} px='auto' >
        <InputLabel id="input-label" margin='dense' sx={{ paddingTop: '10px', textAlign: 'center' }} >Page size</InputLabel>
      </Grid>

      <Grid item xs={2} sx={{ border: '1px solid red', textAlign: 'center' }} px={'auto'}>
        <FormControl xs= {1} >
          <Select
            variant="standard"
            sx={{ maxHeight: 35,textAlign: 'center', width: '100%' }}
            //</FormControl> defaultValue={pageSize}
            value={pageSize}
            label="PageSize" >
            {allSize.map((option, index) => (
              <MenuItem key={index} value={option} sx={{ textAlign: 'center', width: '100%' }} onClick={()=>handlePageSize(option)}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
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
