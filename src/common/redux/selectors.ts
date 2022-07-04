import { createSelector } from 'reselect';
import moment from 'moment';

import { RootState } from './index';
import { useAppSelector } from './hooks';
import { DataItem } from '../../../types';

const paramsReportChartSelector = createSelector(
  (state: RootState) => state.main,
  (state: RootState) => state.control,
  (main, control) => {
    if (Object.keys(main.data).length) {
      const dataItem = main.data[main.selectedCountry.isoCode];
      const startDate = moment(dataItem.data[0].date);
      const endDate = moment(dataItem.data[dataItem.data.length - 1].date);
      let dateList: string[] = [];

      if (control.currentSwitchReportSecond === 'daily_value') {
        const dayMoment = moment(startDate);
        dateList = [startDate.format('YYYY-MM-DD')];
        while (dayMoment < endDate) {
          dayMoment.add(1, 'day');
          dateList.push(dayMoment.format('YYYY-MM-DD'));
        }

        const dataItemList: DataItem[] = dataItem.data.filter((obj) =>
          dateList.some((date) => date === obj.date),
        );
        const valueList: number[] = dataItemList.map(
          (obj) =>
            obj[
              `${
                control.currentSwitchReportFirst === 'total_deaths'
                  ? 'new_deaths'
                  : 'new_cases'
              }`
            ],
        );
        dateList = dateList.map((date) => {
          const check = moment(date, 'YYYY/MM/DD');
          const day = check.format('DD');
          const month = check.format('MM');
          const year = check.format('YY');
          return `${day}/${month}/${year}`;
        });
        return {
          dateList,
          valueList,
        };
      }

      endDate.subtract(1, 'month');
      const monthMoment = moment(startDate);
      while (monthMoment < endDate) {
        monthMoment.add(1, 'month');
        dateList.push(monthMoment.format('YYYY-MM-DD'));
      }

      const dataItemList: DataItem[] = dataItem.data.filter((obj) =>
        dateList.some((date) => date === obj.date),
      );
      const valueList: number[] = dataItemList.map(
        (obj) => obj[control.currentSwitchReportFirst],
      );

      dateList = dateList.map((date) => {
        const check = moment(date, 'YYYY/MM/DD');
        const month = check.format('MM');
        const year = check.format('YY');
        return `${month}-${year}`;
      });

      return {
        dateList,
        valueList,
      };
    }
    return { dateList: [], valueList: [] };
  },
);

const paramsRankChartSelector = createSelector(
  (state: RootState) => state.main,
  (state: RootState) => state.control,
  (main, control) => {
    const type = control.currentSwitchRank;
    if (main.countries) {
      const topCountries = [...main.countries].sort((a, b) => {
        if (a[type] !== undefined && b[type] !== undefined) {
          return a[type] > b[type] ? -1 : 1;
        }
        return a[type] !== undefined ? -1 : 1;
      });
      topCountries.length = control.countTop;
      const countyList: string[] = topCountries.map((obj) => obj.name);
      const valueList: number[] = topCountries.map((obj) => obj[type]);
      return { countyList, valueList };
    }
    return {
      countyList: [],
      valueList: [],
    };
  },
);

export function useFilterReportSelector() {
  return useAppSelector((state) => paramsReportChartSelector(state));
}

export function useFilterRankSelector() {
  return useAppSelector((state) => paramsRankChartSelector(state));
}
