import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3b82f6' },
    secondary: { main: '#d946ef' },
    background: { default: '#f9fafb', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h5: { fontWeight: 600 },
  },
});

export default theme;
