import React, { memo } from 'react';

import CountrySelect from '../../CountrySelectContainer';
import ChartContainer from '../../ChartContainer';
import ChartControlsContainer from '../../ChartControlsContainer';

const Root: React.FC = () => {
  return (
    <>
      <CountrySelect />
      <ChartContainer />
      <ChartControlsContainer />
    </>
  );
};

export default memo(Root);
