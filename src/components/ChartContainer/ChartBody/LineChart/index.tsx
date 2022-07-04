import React, { memo, useContext } from 'react';
import { Theme } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import useControlSelector from '../../../../common/redux/slices/controlSlice/selectors';
import { useFilterReportSelector } from '../../../../common/redux/selectors';
import { UIContext, UIContextProps } from '../../../Shared/UIContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart: React.FC = () => {
  const { themeMode } = useContext(UIContext) as UIContextProps;
  const { dateList, valueList } = useFilterReportSelector();
  const { currentSwitchReportFirst, currentSwitchReportSecond } =
    useControlSelector();
  const theme: Theme = useTheme();

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
    labels: dateList,
    datasets: [
      {
        label:
          currentSwitchReportFirst === 'total_deaths'
            ? `${
                currentSwitchReportSecond === 'daily_value'
                  ? 'New deaths'
                  : 'Total deaths'
              }`
            : `${
                currentSwitchReportSecond === 'daily_value'
                  ? 'New cases'
                  : 'Total cases'
              }`,
        data: valueList,
        pointRadius: 2,
        pointBackgroundColor: `${
          themeMode === 'light' ? '#8b2481' : '#ffb74d'
        }`,
        borderWidth: 2,
        borderColor: `${themeMode === 'light' ? '#ffb74d' : '#b065ad'}`,
        backgroundColor: `${themeMode === 'light' ? '#ffb74d' : '#b065ad'}`,
      },
    ],
  };

  return <Line options={options} data={data} height="450px" />;
};

export default memo(LineChart);
