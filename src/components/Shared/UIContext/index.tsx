import React, {
  createContext,
  memo,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import MuiAlert, { AlertColor } from '@mui/lab/Alert';
import { Snackbar } from '@mui/material';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

export interface UIContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
  themeMode: 'light' | 'dark';
  toggleTheme: (name: 'light' | 'dark') => void;
}

interface AlertProps {
  show: boolean;
  severity?: AlertColor;
  message?: string;
}

const UIContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: 'info',
    message: '',
  });
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');

  const handleClose = () =>
    setAlert({
      show: false,
    });

  return (
    <UIContext.Provider
      value={useMemo(
        () => ({
          setAlert,
          themeMode,
          toggleTheme: setThemeMode,
        }),
        [themeMode],
      )}
    >
      {children}
      <Snackbar open={alert.show} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity={alert.severity}>
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </UIContext.Provider>
  );
};

export default memo(UIContextProvider);
