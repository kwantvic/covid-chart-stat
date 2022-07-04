import React, { useState } from 'react';
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
  updateCountTop,
  updateSwitchRank,
} from '../../../common/redux/slices/controlSlice';
import { useAppDispatch } from '../../../common/redux/hooks';
import useControlSelector from '../../../common/redux/slices/controlSlice/selectors';
import { SwitchRank } from '../../../common/redux/slices/controlSlice/types';

const RankedControl: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSwitchRank, countTop } = useControlSelector();
  const theme: Theme = useTheme();
  const [arrCountRank] = useState([10, 15, 20, 30, 50]);

  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleSwitchChange = (event: SelectChangeEvent) => {
    dispatch(updateSwitchRank(event.target.value as SwitchRank));
  };

  const handleCountChange = (event: SelectChangeEvent) => {
    dispatch(updateCountTop(+event.target.value));
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <FormControl
        sx={{ width: matchesSm ? '49%' : `${matchesMd ? '35%' : '25%'}` }}
      >
        <InputLabel id="select-stat-rank-label">
          Select statistics type
        </InputLabel>
        <Select
          labelId="select-stat-rank-label"
          label="Select statistics type"
          id="select-stat-rank"
          value={currentSwitchRank}
          onChange={handleSwitchChange}
        >
          <MenuItem value="total_deaths">Death count</MenuItem>
          <MenuItem value="total_cases">Confirmed cases</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ width: matchesSm ? '49%' : `${matchesMd ? '25%' : '17%'}` }}
      >
        <InputLabel id="select-count-stat-rank-label">
          Number of countries
        </InputLabel>
        <Select
          labelId="select-count-stat-rank-label"
          label="Number of countries"
          id="select-count-stat-rank"
          value={String(countTop)}
          onChange={handleCountChange}
        >
          {arrCountRank.map((x) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default RankedControl;
