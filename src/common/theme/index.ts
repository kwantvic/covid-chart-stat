import { createTheme, responsiveFontSizes } from '@mui/material';

import palette from './palette';

const defaultTheme = (mode: 'light' | 'dark') =>
  responsiveFontSizes(
    createTheme({
      spacing: 4,
      palette: palette(mode),
    }),
  );

export default defaultTheme;
