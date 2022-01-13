import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';
import GeosansLight from '../fonts/GeosansLight.woff';
import Cinzel from '../fonts/Cinzel-VariableFont_wght.woff';
import RobotoBold from '../fonts/Roboto-Bold.woff';
import RobotoRegular from '../fonts/Roboto-Regular.woff';

const geosansLight = {
  fontFamily: 'GeosansLight',
  src: `
    local('GeosansLight'), 
    url(${GeosansLight}) format('woff')
  `,
  fontWeight: 500,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
const cinzel = {
  fontFamily: 'Cinzel',
  src: `
    local('Cinzel-VariableFont_wght'), 
    url(${Cinzel}) format('woff')
  `,
  fontWeight: 400,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
const robotoBold = {
  fontFamily: 'Roboto',
  src: `
    local('Roboto-Bold'), 
    url(${RobotoBold}) format('woff')
  `,
  fontWeight: 700,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
const robotoRegular = {
  fontFamily: 'Roboto',
  src: `
    local('Roboto-Regular'), 
    url(${RobotoRegular}) format('woff')
  `,
  fontWeight: 400,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}


const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: 'GeosansLight',
        fontWeightRegular: 500,
        h3: {
          fontFamily: "Cinzel",
          fontWeight: 400,
        },
        h4: {
          fontFamily: "Cinzel",
          fontWeight: 400,
        },
        h5: {
          fontFamily: "Cinzel",
          fontWeight: 400,
        },
        h6: {
          fontFamily: "Cinzel",
          fontWeight: 400,
        },
        button: {
          fontFamily: "Roboto",
          fontWeight: 400,
        },      
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [geosansLight, cinzel, robotoBold, robotoRegular],
          },
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
