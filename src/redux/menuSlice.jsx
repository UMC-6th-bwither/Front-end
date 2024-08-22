import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: '브위더 이용약관 동의',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenu(state, action) {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;

export const selectActiveMenu = (state) => state.menu.activeMenu;

export default menuSlice.reducer;
