import { createTheme } from '@mui/material/styles';

export const shades = {
  primary: {
    100: '#dbddd2',
    200: '#b7baa6',
    300: '#939879',
    400: '#6f754d',
    500: '#4b5320',
    600: '#3c421a',
    700: '#2d3213',
    800: '#1e210d',
    900: '#0f1106',
  },
  secondary: {
    100: '#f5ddcc',
    200: '#ebbb99',
    300: '#e09966',
    400: '#d67733',
    500: '#cc5500',
    600: '#a34400',
    700: '#7a3300',
    800: '#522200',
    900: '#291100',
  },
  neutral: {
    100: '#d8d8d8',
    200: '#b1b1b1',
    300: '#8a8a8a',
    400: '#636363',
    500: '#3c3c3c',
    600: '#303030',
    700: '#242424',
    800: '#181818',
    900: '#0c0c0c',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ['Lora', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 48,
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 36,
    },
    h3: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h4: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
    },
  }
});
