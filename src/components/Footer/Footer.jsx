import React from 'react'
import { useRecoilState } from 'recoil'
import { styled } from '@mui/material/styles'
import { Container, Box, Paper, position, top, Grid } from '@mui/material'
import i18n from 'i18next'

import { languageAtom } from 'store/atoms/shared.atom'

const Footer = () => {
  const [lang, setLang] = useRecoilState(languageAtom)

  const languages = {
    en: 'English',
    sr: 'Srpski',
  }

  const languageChange = (lang) => () => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cccccc',
    ...theme.typography.body2,
    paddingTop: 4 ,
    textAlign: 'center',
    itemAlign: 'center',
    color: theme.palette.text === 'dark' ? '#cccccc' : '#1A2027' ,
    minWidth: '10vw',
    minHeight: 26,
    width: '100%',
    border: '1px solid green',
  }))

  return (
    <Box >
      <Grid
        container
        directions={'column'}
        justifyContent="left"
        sx={{ textAlign: 'left' }}>

        <Item>
          {Object.keys(languages).map((key) => (
            key === lang ? (
              <small data-testid={`lang-${key}`} key={key}> {languages[key]} </small>
            ) : (
              <span data-testid={`lang-${key}`} key={key} onClick={languageChange(key)}>
                {languages[key]}
              </span>
            )
          ))}
        </Item>
      </Grid >
    </Box>
  )
}

export default Footer
