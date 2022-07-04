import React, { memo, useState } from 'react';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import Flag from 'react-world-flags';

import useStyles from './styles';
import {
  useCountriesSelector,
  useSelectCountrySelector,
} from '../../../common/redux/slices/mainSlice/selectors';
import { useAppDispatch } from '../../../common/redux/hooks';
import { updateSelectedCountry } from '../../../common/redux/slices/mainSlice';
import { CountriesListItem } from '../../../common/redux/slices/mainSlice/types';

const CountrySelect: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const selectedCountry = useSelectCountrySelector();

  const [inputValue, setInputValue] = useState(false);

  return (
    <Autocomplete
      id="country-items"
      className={classes.root}
      options={useCountriesSelector()}
      onChange={(e, select: CountriesListItem | null) => {
        if (select) {
          setInputValue(true);
          dispatch(updateSelectedCountry(select));
        } else {
          setInputValue(false);
          dispatch(updateSelectedCountry({ isoCode: 'OWID_WRL' }));
        }
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Box pr={2}>
            <Flag code={option.isoCode} height="16" />
          </Box>
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <>
          {inputValue && (
            <InputAdornment position="start" className={classes.flag}>
              <Flag code={selectedCountry.isoCode} height="16" />
            </InputAdornment>
          )}
          <TextField
            {...params}
            label="Choose a country"
            variant="standard"
            inputProps={{
              ...params.inputProps,
              style: {
                paddingLeft: inputValue ? '35px' : 0,
              },
            }}
          />
        </>
      )}
    />
  );
};

export default memo(CountrySelect);
