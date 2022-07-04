import React, { memo } from 'react';
import { Box } from '@mui/material';

import CountrySelect from './CountrySelect';
import ThemeToggle from './ThemeToggle';

const CountrySelectContainer: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <CountrySelect />
      <ThemeToggle />
    </Box>
  );
};

export default memo(CountrySelectContainer);
