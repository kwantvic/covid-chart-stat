import { light, dark } from './colorSheme';

const palette = (themeMode = 'light') => {
  return themeMode === 'light' ? light : dark;
};

export default palette;
