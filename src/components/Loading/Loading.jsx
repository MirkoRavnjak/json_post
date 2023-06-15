import React from 'react'
import { createUseStyles } from 'react-jss'

import styles from './Loading.styles'

const useStyles = createUseStyles(styles)

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <div className={ classes.roller }>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  )
}

export default Loading
