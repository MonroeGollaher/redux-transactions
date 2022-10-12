import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchState {
  filter: string
  value: string;
}

const initialState: SearchState = {
  filter: "",
  value: "",
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {      
      state.value = action.payload;
      },
    setFilter: (state, action: PayloadAction<string>) => { 
      state.filter = action.payload;
    },
  },
 
});

export const { setSearch, setFilter } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;
export const selectFilter = (state: RootState) => state.filter.filter;

export default searchSlice.reducer;
