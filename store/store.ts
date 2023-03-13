import { configureStore } from '@reduxjs/toolkit';
import searchAndFilterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    searchAndFilter: searchAndFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
