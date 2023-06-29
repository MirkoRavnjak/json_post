import React, { useEffect , useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userIdAtom } from 'store/atoms/shared.atom'
import { Link } from 'react-router-dom'
import { Grid, Box, Button } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import isObject from 'utils/isObject'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { green } from '@mui/material/colors'

const Detail = () => {

  const navigate = useNavigate()
  const { location } = useLocation()
  const { id } = useParams()
  console.log(id)

  const [user , setUser] = useState({})

  let userArr = []
  let companyName = ''
  let street = ''
  let suite = ''
  let city = ''
  let zipcode = ''
  let lat = ''
  let lng = ''
  let companyCatchPhrase = ''
  let companyBs = ''

  useEffect(() => {
    //controler.abort
    fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json()
      }).then(data => {

        setUser(data)})
      .catch((err) => {
        console.log('reject reason = ', err)
        alert('Reject reason', err)

      })

  }, [id])

  userArr = Object.keys(user).map((key) => [key, user[key]])

  userArr.forEach((element) => {

    if (isObject(element[1])) {
      var array = element[1]

      let tempArr = Object.keys(array).map((key) => [key, array[key]])

      if (element[0] === 'address') {
        street = array.street
        suite = array.suite
        city = array.city
        zipcode = array.zipcode

        tempArr.forEach( item => {
          if (isObject(item[1])) {
            lat = item[1].lat
            lng = item[1].lng

          }
        })
      }
      if (element[0] === 'company') {
        // companyArr = tempArr
        companyName = array.name
        companyCatchPhrase = array.catchPhrase
        companyBs = array.bs
      }

    }
  })

  const columns = [
    { field: 'key', headerName: 'KEYS', width: 150 },
    { field: 'data', headerName: 'DATA', width: 300 },
  ]

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 3
  }))

  const handlerPostsClick = () => {
    console.log('event.target.value = ', event.target.value)
    navigate('/posts/')
  }

  const handlerAlbumsClick = () => {
    console.log('event.target.value = ', event.target.value)
    navigate('/albums/')
  }

  const handlerTodosClick = () => {
    console.log('event.target.value = ', event.target.value)
    navigate('/todos/')
  }
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="left"
        row={{ xs: 2 }}
        rowheight={12}
        sx={{ position: 'relative',top: 35, width: '45vw',margin: 'auto',padding: 2,backgroundColor: '#eaeaea' }}
      >
        <Box xs={6} md={4} ml={3} mr={3} ><Item sx={{ color: 'green' }}>   ... DETAIL ...  </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> ID             </Item><Item > {user.id}            </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Name           </Item><Item > {user.name}          </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> User Name      </Item><Item > {user.username}      </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> email          </Item><Item > {user.email}         </Item></Box>
        <Box xs={6} md={4} ml={3} mr={3} color={green}><Item sx={{ color: 'green' }}> Address        </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Street        </Item><Item > {street}             </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Suite         </Item><Item > {suite}              </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> City          </Item><Item > {city}               </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Zip Code      </Item><Item > {zipcode}            </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Phone         </Item><Item > {user.phone}         </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Website       </Item><Item > {user.website}       </Item></Box>
        <Box xs={6} md={4} ml={3} mr={3} color={green}><Item sx={{ color: 'green' }}> GEO Location       </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Latitude      </Item><Item > {lat}                </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Longtitude    </Item><Item > {lng}                </Item></Box>
        <Box xs={6} md={4} ml={3} mr={3} color={green}><Item sx={{ color: 'green' }}> Company        </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Name          </Item><Item > {companyName}        </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Catch Phrase  </Item><Item > {companyCatchPhrase} </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} ><Item> Bs            </Item><Item > {companyBs}          </Item></Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} >
          <Button container="true" sx= {{ bgcolor: 'grey', color: 'green' ,border: '1px solid blue' , margin: 1 }} onClick={handlerPostsClick} >POSTs</Button>
          <Button container="true" sx= {{ bgcolor: 'grey', color: 'green' ,border: '1px solid blue' , margin: 1 }} onClick={handlerAlbumsClick}>ALBUMs</Button>
          <Button container="true" sx= {{ bgcolor: 'grey', color: 'green' ,border: '1px solid blue' , margin: 1 }} onClick={handlerTodosClick} >TODOs</Button>

        </Box>

      </Grid>
    </>
  )

}
export default Detail

/*

*/
