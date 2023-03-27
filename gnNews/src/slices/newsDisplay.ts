import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DisplayOptions = 'List' | 'Tiles';

interface NewsDisplayState {
  value: DisplayOptions;
}

const initialState: NewsDisplayState = {
  value: 'List',
};

export const newsDisplay = createSlice({
  name: 'newsDisplay',
  initialState,
  reducers: {
    changeNewsDisplay: (state, action: PayloadAction<DisplayOptions>) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { changeNewsDisplay } = newsDisplay.actions;

export default newsDisplay.reducer;
