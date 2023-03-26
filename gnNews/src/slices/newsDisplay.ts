import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DisplayOptions = 'list' | 'tiles';

interface NewsDisplayState {
  value: DisplayOptions;
}

const initialState: NewsDisplayState = {
  value: 'list',
};

export const newsDisplay = createSlice({
  name: 'newsDisplay',
  initialState,
  reducers: {
    changeNewsDisplay: (state, action: PayloadAction<DisplayOptions>) => {
      state.value = action.payload;
    },
  },
});

export const { changeNewsDisplay } = newsDisplay.actions;

export default newsDisplay.reducer;
