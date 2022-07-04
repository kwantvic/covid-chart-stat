export interface DataItem {
  date: string;
  new_deaths: number;
  new_cases: number;
  total_deaths: number;
  total_cases: number;
}

export type CovidDataItem = {
  continent?: string;
  location: string;
  data: DataItem[];
};
