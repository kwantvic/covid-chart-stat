import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { UIContext, UIContextProps } from '../../Shared/UIContext';

const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useContext(UIContext) as UIContextProps;

  const toggle = () => {
    toggleTheme(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={toggle} style={{ marginRight: 2, alignSelf: 'end' }}>
      {themeMode === 'light' ? <NightlightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
