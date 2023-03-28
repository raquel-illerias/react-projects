import { createTheme } from '@mui/material/styles';


const theme = createTheme(  {
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#006491',
          fontSize: '1.5rem',
          fontFamily: 'Roboto Condensed, sans-serif'
        }
      }
    }
  },
  palette: {
    primary: {
        main: "#00bc73"
    },
    secondary: {
        main: "#028ecc"
    }
  },
 
});

export default theme;

