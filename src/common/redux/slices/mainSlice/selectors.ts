import { useAppSelector } from '../../hooks';

export function useFetchingStatus() {
  return useAppSelector((state) => state.main.loading);
}

export function useCovidDataSelector() {
  return useAppSelector((state) => state.main.data);
}

export function useCountriesSelector() {
  return useAppSelector((state) => state.main.countries);
}

export function useSelectCountrySelector() {
  return useAppSelector((state) => state.main.selectedCountry);
}
