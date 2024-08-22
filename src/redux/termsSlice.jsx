import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAllChecked: false,
  checkedItems: {
    term1: false,
    term2: false,
    term3: false,
    term4: false,
  },
};

const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    setAllChecked: (state, action) => {
      const { isChecked } = action.payload;
      state.isAllChecked = isChecked;
      Object.keys(state.checkedItems).forEach((key) => {
        state.checkedItems[key] = isChecked;
      });
    },
    setItemChecked: (state, action) => {
      const { name, checked } = action.payload;
      state.checkedItems[name] = checked;
      state.isAllChecked = Object.values(state.checkedItems).every(Boolean);
    },
  },
});

export const { setAllChecked, setItemChecked } = termsSlice.actions;
export default termsSlice.reducer;
