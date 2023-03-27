import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputValueState {
  value: string;
}

const initialState: InputValueState = {
  value: '',
};

export const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { changeInputValue } = inputValueSlice.actions;

export default inputValueSlice.reducer;
