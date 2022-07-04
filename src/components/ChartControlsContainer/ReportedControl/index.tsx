import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/styles';

import {
  updateSwitchReportFirst,
  updateSwitchReportSecond,
} from '../../../common/redux/slices/controlSlice';
import { useAppDispatch } from '../../../common/redux/hooks';
import useControlSelector from '../../../common/redux/slices/controlSlice/selectors';
import {
  SwitchReportFirst,
  SwitchReportSecond,
} from '../../../common/redux/slices/controlSlice/types';

const ReportedControl: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSwitchReportFirst, currentSwitchReportSecond } =
    useControlSelector();
  const theme: Theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleFirstChange = (event: SelectChangeEvent) => {
    dispatch(updateSwitchReportFirst(event.target.value as SwitchReportFirst));
  };

  const handleSecondChange = (event: SelectChangeEvent) => {
    dispatch(
      updateSwitchReportSecond(event.target.value as SwitchReportSecond),
    );
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <FormControl
        sx={{ width: matchesSm ? '49%' : `${matchesMd ? '35%' : '25%'}` }}
      >
        <InputLabel id="select-first-stat-report-label">
          Select statistics type
        </InputLabel>
        <Select
          labelId="select-first-stat-report-label"
          label="Select statistics type"
          id="select-first-stat-report"
          value={currentSwitchReportFirst}
          onChange={handleFirstChange}
        >
          <MenuItem value="total_deaths">Death count</MenuItem>
          <MenuItem value="total_cases">Confirmed cases</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ width: matchesSm ? '49%' : `${matchesMd ? '35%' : '25%'}` }}
      >
        <InputLabel id="select-second-stat-report-label">
          Select statistics type
        </InputLabel>
        <Select
          labelId="select-second-stat-report-label"
          label="Select statistics type"
          id="select-second-stat-report"
          value={currentSwitchReportSecond}
          onChange={handleSecondChange}
        >
          <MenuItem value="daily_value">Daily new values</MenuItem>
          <MenuItem value="cumulative_mode">Cumulative mode</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ReportedControl;
