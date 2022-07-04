import React, { memo, PropsWithChildren } from 'react';
import { Box, Fade, Paper } from '@mui/material';

import useStyles from './styles';
import LinearDeterminate from './LinearDeterminate';
import { useFetchingStatus } from '../../../../common/redux/slices/mainSlice/selectors';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();
  const fetchingStatus = useFetchingStatus();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
    >
      <LinearDeterminate isFetching={fetchingStatus !== 'succeeded'} />
      <Fade unmountOnExit in={fetchingStatus === 'succeeded'}>
        <Paper variant="outlined" className={classes.paper}>
          {children}
        </Paper>
      </Fade>
    </Box>
  );
};

export default memo(MainLayout);
