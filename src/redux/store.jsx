import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarkSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    modal: modalReducer,
  },
});

export default store;
