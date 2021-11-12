import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01A8D9'
    },
    secondary: {
      main: '#F19100'
    },
    info: {
      main: '#BA3C16'
    },
    warning: {
      main: '#F39A64'
    }
  },
  typography: {
    fontFamily: '"Josefin Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '144px',
      lineHeight: '1'
    },
    h2: {
      fontSize: '96px',
      lineHeight: '1'
    },
    h3: {
      fontSize: '72px',
      lineHeight: '1'
    },
    h4: {
      fontSize: '48px',
      lineHeight: '1'
    },
    body1: {
      fontSize: '36px',
      lineHeight: '1'
    },
    body2: {
      fontSize: '28px',
      lineHeight: '1'
    },
  }
})

export default theme;