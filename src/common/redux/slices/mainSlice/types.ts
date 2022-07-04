export type Loading = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface CountriesListItem {
  isoCode: string;
  name: string;
  total_deaths: number;
  total_cases: number;
}

export interface SelectedCountry {
  isoCode: string;
  name?: string;
}
