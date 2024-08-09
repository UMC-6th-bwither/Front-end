import { createSlice } from '@reduxjs/toolkit';
import { 전체DogCard } from '../pages/selectData';

const initialState = {
  card: 전체DogCard,
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const item = state.card.find((e) => e.name === action.payload);
      item.isBookmarked = !item.isBookmarked;
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
