import React from 'react'
import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper,{
  shouldForwardProp: (prop) => prop !== 'noHover'
})(({ theme, noHover }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede9',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 3,
  overflow: 'hidden',
  ...(!noHover && { '&:hover': { backgroundColor: '#dfdfdf', cursor: 'pointer' } }),
}))

const Title = (props) => {
  // console.log('Title 27-  props = ', props)
  const navigate = useNavigate()
  //console.log('Title - navigate = ', navigate )

  //   Object { islink: true, text: "Leanne Graham", textId: 1, onClick: handlenavigate(userid)
  // , src: "/1Big.png", userId: 1 }
  // Title.jsx:17

  const text = props.text
  //console.log(' Title - propst.text = ', text)
  const islink = props.islink
  //console.log(' Title - props.islink = ', islink)
  const src = props.src
  //console.log(' Title - props.src = ', src)
  const userid = parseInt(props.userid)
  //console.log('Title - id = ', userid )

  const handlenavigate1 = () => {

    // console.log('Title - navigate pattern = ',`/users/${userid}`)
    navigate(`/users/${userid}`, { state: { userid: userid, name: text, src: src } })
  }

  return (
    <Grid container direction={'row'}>
      <Grid item sx={{ width: '100%' }} mx={'auto'} >
        {islink && <Item onClick={handlenavigate1} > {text} </Item>}

        {!islink && <Item noHover > {text} </Item>}
      </Grid>

    </Grid>
  )
}
export default Title

Title.propTypes = {
  text: PropTypes.string,
  userid: PropTypes.string,
  islink: PropTypes.bool,
  src: PropTypes.string
}

Title.defaultProps = {
  text: '',
  islink: false,
  userid: '',
  src: ''
}

/*  <Item onClick={islink ? handlenavigate1 : null} sx={islink ? { cursor: 'pointer', ':hover': { backgroundColor: '#dfdfdf' } } : null } >
*/
