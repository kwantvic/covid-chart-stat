import React from 'react';
import { Box } from '@mui/material';
import ReportedControl from './ReportedControl';
import RankedControl from './RankedControl';
import useControlSelector from '../../common/redux/slices/controlSlice/selectors';

const ChartControlsContainer: React.FC = () => {
  const { currentTab } = useControlSelector();
  return (
    <Box>
      {currentTab === 0 && <ReportedControl />}
      {currentTab === 1 && <RankedControl />}
    </Box>
  );
};

export default ChartControlsContainer;
