import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CovidDataItem } from '../../../../../types';
import { CountriesListItem, Loading, SelectedCountry } from './types';
import covidApi from '../../../api';

export const fetchCovidData = createAsyncThunk<Record<string, CovidDataItem>>(
  'main/getCovidData',
  async () => {
    const resp = await covidApi.getCovidData();
    return resp.data;
  },
);

interface InitialState {
  loading: Loading;
  data: Record<string, CovidDataItem>;
  countries: CountriesListItem[];
  selectedCountry: SelectedCountry;
}

const initialState: InitialState = {
  loading: 'idle',
  data: {},
  countries: [],
  selectedCountry: { isoCode: 'OWID_WRL' },
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setData(state, { payload }: PayloadAction<Record<string, CovidDataItem>>) {
      state.data = payload;
    },
    setCountries(state, { payload }: PayloadAction<CountriesListItem[]>) {
      state.countries = payload;
    },
    updateSelectedCountry(state, { payload }: PayloadAction<SelectedCountry>) {
      state.selectedCountry = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchCovidData.fulfilled, (state, { payload }) => {
        state.loading = 'succeeded';
        state.data = payload;
        state.countries = Object.getOwnPropertyNames(payload)
          .filter((str) => !!payload[str].continent)
          .map((isoCode) => {
            const value = payload[isoCode];
            const lastValue = value.data[value.data.length - 1];
            return {
              isoCode,
              name: value.location,
              total_deaths: lastValue.total_deaths,
              total_cases: lastValue.total_cases,
            };
          });
      })
      .addCase(fetchCovidData.rejected, (state) => {
        state.loading = 'idle';
      });
  },
});

export const { setData, setCountries, updateSelectedCountry } =
  mainSlice.actions;
export default mainSlice;
