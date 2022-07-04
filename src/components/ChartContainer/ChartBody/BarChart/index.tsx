import React, { memo, useContext } from 'react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Theme } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Bar } from 'react-chartjs-2';

import useControlSelector from '../../../../common/redux/slices/controlSlice/selectors';
import { useSelectCountrySelector } from '../../../../common/redux/slices/mainSlice/selectors';
import { useFilterRankSelector } from '../../../../common/redux/selectors';
import { UIContext, UIContextProps } from '../../../Shared/UIContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart: React.FC = () => {
  const { themeMode } = useContext(UIContext) as UIContextProps;
  const { countyList, valueList } = useFilterRankSelector();
  const { currentSwitchRank } = useControlSelector();
  const selectedCountry = useSelectCountrySelector();
  const theme: Theme = useTheme();

  const backgroundColor = countyList.map((name) =>
    name === selectedCountry.name
      ? '#9ed70f'
      : `${themeMode === 'light' ? '#ffb74d' : '#b065ad'}`,
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: theme.palette.secondary.contrastText,
        },
      },
    },
    scales: {
      yAxes: {
        ticks: {
          color: theme.palette.secondary.contrastText,
        },
      },
      xAxes: {
        ticks: {
          color: theme.palette.secondary.contrastText,
        },
      },
    },
  };

  const data = {
    labels: countyList,
    datasets: [
      {
        label:
          currentSwitchRank === 'total_deaths' ? 'Total deaths' : 'Total cases',
        data: valueList,
        backgroundColor,
      },
    ],
  };

  return <Bar options={options} data={data} height="450px" />;
};

export default memo(BarChart);
