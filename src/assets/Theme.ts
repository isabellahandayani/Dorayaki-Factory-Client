import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#01A8D9'
    },
    info: {
      main: '#F19100',
      light: '#BA3C16'
    },
    warning: {
      main: '#F39A64'
    },
    success: {
      main: '#BA3C16'
    }
  },
  typography: {
    fontFamily: 'Comfortaa, "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '144px',
      lineHeight: '1',
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
      fontSize: '24px'
    },
    body2: {
      fontSize: '12px'
    },
  }
})

export default theme;