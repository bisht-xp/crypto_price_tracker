import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchState {
  searchText: string;
  filterValue: string;
}

const initialState: searchState = {
  searchText: "",
  filterValue: "",
};

const searchAndFilterSlice = createSlice({
    name: 'searchAndFilter',
    initialState,
    reducers: {
      setSearchText: (state, action: PayloadAction<string>) => {
        state.searchText = action.payload;
      },
      setFilterValue: (state, action: PayloadAction<string>) => {
        state.filterValue = action.payload;
      },
    },
  });;

export const { setSearchText, setFilterValue } = searchAndFilterSlice.actions;
export default searchAndFilterSlice.reducer;
