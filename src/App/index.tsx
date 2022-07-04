import React, { memo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import './App.scss';
import Root from '../Root';
import MainLayout from '../layouts/MainLayout';
import UIContextProvider, { UIContext } from '../UIContext';
import theme from '../../../common/theme';
import store from '../../../common/redux';

const App: React.FC = () => (
  <Provider store={store}>
    <UIContextProvider>
      <UIContext.Consumer>
        {({ themeMode }) => (
          <ThemeProvider theme={theme(themeMode)}>
            <CssBaseline />
            <MainLayout>
              <Root />
            </MainLayout>
          </ThemeProvider>
        )}
      </UIContext.Consumer>
    </UIContextProvider>
  </Provider>
);

export default memo(App);
