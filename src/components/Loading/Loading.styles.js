export default (theme) => ({
  containerWrapper: {
    position: 'relative',
    minHeight: '80vh',
    width: '100%'
  },
  container: {
    width: 100,
    height: 100,
    overflow: 'auto',
    margin: 'auto',
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  roller: {
    display: 'inline-block',
    position: 'relative',
    width: 80,
    height: 80,
    '& div': {
      animationName: '$loading',
      animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      transformOrigin: '40px 40px',
      '&:after': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: theme.accent1,
        margin: '-4px 0 0 -4px',
      },
      '&:nth-child(1)': {
        animationDelay: '-0.036s',
        '&:after': {
          top: 63,
          left: 63
        }
      },
      '&:nth-child(2)': {
        animationDelay: '-0.072s',
        '&:after': {
          top: 68,
          left: 58
        }
      },
      '&:nth-child(3)': {
        animationDelay: '-0.108s',
        '&:after': {
          top: 71,
          left: 48
        }
      },
      '&:nth-child(4)': {
        animationDelay: '-0.144s',
        '&:after': {
          top: 72,
          left: 40
        }
      },
      '&:nth-child(5)': {
        animationDelay: '-0.188s',
        '&:after': {
          top: 71,
          left: 32
        }
      },
      '&:nth-child(6)': {
        animationDelay: '-0.216s',
        '&:after': {
          top: 68,
          left: 24
        }
      },
      '&:nth-child(7)': {
        animationDelay: '-0.252s',
        '&:after': {
          top: 63,
          left: 17
        }
      },
      '&:nth-child(8)': {
        animationDelay: '-0.288s',
        '&:after': {
          top: 56,
          left: 12
        }
      }
    }
  },
  '@keyframes loading': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },

})
