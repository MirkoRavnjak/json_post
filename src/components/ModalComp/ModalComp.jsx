import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
//import Fade from '@mui/material/Fade'

//import Modal from '@mui/material-Modal'
import PropTypes from 'prop-types'

const ModalComp = ( props) => {

  const handleCloseAvatar = props.onClose
  const src = props.src
  const name = props.name

  useEffect(()=> {

    console.log('... MODAL ...userName = ',name,'|','props.src = ',src)
  },[])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#a0a0a0' : '#636161'),
    border: '2px solid re',
    boxShadow: 10,

    px: 4,
    py: 4,

  }

  return (
    <Grid container>
      <Grid item >

        <Backdrop
          // sx={{ color: '#f9f9f980', zIndex: 4 }}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex + 1, backgroundColor: 'transparent', boxShadow: 'none' }}
          open={true}
          onClick={handleCloseAvatar}
        >

          <Box sx={{ ...style }}>
            <img src={process.env.PUBLIC_URL + src} alt= {name} width={'100%'} />
          </Box>

        </Backdrop>
        {/* </Modal> */}
      </Grid>
    </Grid>
  )
}
export default ModalComp

ModalComp.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.any.isRequired,

}

/*
   <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          bgcolor={'#d5d5d550'}
          opacity={0.5}
          open={true}
          onClose={handleCloseAvatar}
  bgColor= 'green'
          closeAfterTransition

  /* position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

 position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
*/
