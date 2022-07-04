import { PaletteMode } from '@mui/material';

export const light = {
  mode: 'light' as PaletteMode,
  primary: {
    main: '#ec9175',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f9b934',
    light: '#ffb74d',
    dark: '#FF9800',
    contrastText: '#676767',
  },
  background: {
    default: '#ec9175',
  },
};

export const dark = {
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#1c023a',
  },
  secondary: {
    main: '#e501c9',
    contrastText: '#fff',
  },
  background: {
    paper: '#5555a2',
    default: '#1c023a',
  },
};
