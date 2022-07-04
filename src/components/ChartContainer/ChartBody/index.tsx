import React from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';

import { useAppDispatch } from '../../../common/redux/hooks';
import { updateCurrentTab } from '../../../common/redux/slices/controlSlice';
import useControlSelector from '../../../common/redux/slices/controlSlice/selectors';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { CurrentTab } from '../../../common/redux/slices/controlSlice/types';

interface TabPanelProps {
  children: React.ReactNode;
  index: CurrentTab;
  value: CurrentTab;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

function a11yProps(index: CurrentTab) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ChartBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentTab } = useControlSelector();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(updateCurrentTab(newValue));
  };
  return (
    <Box width="100%" mt={5}>
      <AppBar position="static">
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="chart-tabs"
        >
          <Tab
            label="Reported cases"
            {...a11yProps(CurrentTab.reportedCases)}
          />
          <Tab label="Ranked charts" {...a11yProps(CurrentTab.rankedCharts)} />
        </Tabs>
      </AppBar>
      <TabPanel value={currentTab} index={CurrentTab.reportedCases}>
        <LineChart />
      </TabPanel>
      <TabPanel value={currentTab} index={CurrentTab.rankedCharts}>
        <BarChart />
      </TabPanel>
    </Box>
  );
};

export default ChartBody;
