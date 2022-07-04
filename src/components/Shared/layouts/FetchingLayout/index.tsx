import React, { memo, PropsWithChildren, useContext, useEffect } from 'react';
import { fetchCovidData } from '../../../../common/redux/slices/mainSlice';
import { useAppDispatch } from '../../../../common/redux/hooks';
import { UIContext, UIContextProps } from '../../UIContext';

const FetchingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { setAlert } = useContext(UIContext) as UIContextProps;

  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchCovidData()).unwrap();
      } catch (err) {
        setAlert({
          show: true,
          severity: 'error',
          message: `${
            err instanceof Error ? err.message : 'Error loading data'
          }`,
        });
      }
    })();
  }, [dispatch, setAlert]);

  return <>{children}</>;
};

export default memo(FetchingLayout);
