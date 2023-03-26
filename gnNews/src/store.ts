import { configureStore } from '@reduxjs/toolkit';
import newsDisplay from './slices/newsDisplay';

export const store = configureStore({
  reducer: {
    newsDisplay,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
