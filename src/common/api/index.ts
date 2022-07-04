import instance from './api-instance';
import { CovidDataItem } from '../../../types';

const covidApi = {
  getCovidData() {
    return instance
      .get<Record<string, CovidDataItem>>('/owid-covid-data.json')
      .then((resp) => resp);
  },
};

export default covidApi;
