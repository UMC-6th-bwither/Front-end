import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookmarkReducer from './bookmarkSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarkReducer,
    modal: modalReducer,
  },
});

export default store;
