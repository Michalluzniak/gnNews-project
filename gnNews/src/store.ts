import { configureStore } from '@reduxjs/toolkit';
import newsDisplay from './slices/newsDisplay';
import inputValueSlice from './slices/searchbarValue';

export const store = configureStore({
  reducer: {
    newsDisplay,
    inputValueSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
