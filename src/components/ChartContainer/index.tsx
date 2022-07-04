import React from 'react';
import { Box } from '@mui/material';
import ChartBody from './ChartBody';

const ChartContainer: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ChartBody />
    </Box>
  );
};

export default ChartContainer;
