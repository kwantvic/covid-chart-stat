import React, { memo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import './App.scss';
import Root from '../components/Shared/Root';
import MainLayout from '../components/Shared/layouts/MainLayout';
import UIContextProvider, { UIContext } from '../components/Shared/UIContext';
import theme from '../common/theme';
import store from '../common/redux';
import FetchingLayout from '../components/Shared/layouts/FetchingLayout';

const App: React.FC = () => (
  <Provider store={store}>
    <UIContextProvider>
      <UIContext.Consumer>
        {({ themeMode }) => (
          <ThemeProvider theme={theme(themeMode)}>
            <CssBaseline />
            <FetchingLayout>
              <MainLayout>
                <Root />
              </MainLayout>
            </FetchingLayout>
          </ThemeProvider>
        )}
      </UIContext.Consumer>
    </UIContextProvider>
  </Provider>
);

export default memo(App);
