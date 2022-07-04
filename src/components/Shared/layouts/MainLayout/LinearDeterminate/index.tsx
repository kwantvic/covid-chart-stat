import React, { useEffect, useState } from 'react';
import { Box, Fade, LinearProgress } from '@mui/material';

interface LinearLinearDeterminateProps {
  isFetching: boolean;
}

const LinearDeterminate: React.FC<LinearLinearDeterminateProps> = ({
  isFetching,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fade unmountOnExit in={isFetching}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        top={0}
        bottom={0}
        left={0}
        right={0}
        overflow="hidden"
      >
        <Box component="span" className="progress-fetching">
          Data loading, please wait
        </Box>
        <Box width="30%">
          <LinearProgress
            variant="determinate"
            value={progress}
            color="secondary"
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default LinearDeterminate;
