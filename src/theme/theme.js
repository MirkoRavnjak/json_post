import each from 'utils/each'

const abstractTheme = {
  black: '#4f4f4f',
  lightGray: '#f3f3f4',
  gray: '#d2ddef',
  white: '#fff',

  headerHeight: 60,
  borderRadius: 4,

  font: {
    small: '0.8rem'
  },

  notification: {
    info: '#3498db',
    success: '#07bc0c',
    warning: '#f1c40f',
    error: '#e74c3c'
  }

}

const theme = {
  ...abstractTheme,
  primary: '#636b42',
  accent0: '#535A38FF',
  accent1: '#7e8463',
  accent2: '#999d84',
  accent3: '#b5b7a5',
  accent4: '#e3e3d2',
  disabled: '#BFBFBFFF',

  background: {
    header: '#f7f7f7',
    container: '#f7f7f7'
  },

  text: {
    primary: '#828282',
    secondary: abstractTheme.black
  },

  error: '#B00020',
  logo: '-webkit-linear-gradient(0deg, #535A38FF, #b5b7a5 100%);',

  boxShadow: {
    big: 'rgb(85 85 85 / 20%) 5px 5px 5px -1px, rgb(85 85 85 / 14%) 5px 5px 5px 5px, rgb(85 85 85 / 12%) 5px 5px 5px 5px',
    small: 'rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },

}

export default theme
