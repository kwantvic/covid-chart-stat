import { configureStore } from '@reduxjs/toolkit';

import mainSlice from './slices/mainSlice';
import controlSlice from './slices/controlSlice';

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    control: controlSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
