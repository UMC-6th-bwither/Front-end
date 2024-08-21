import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookmarkReducer from './bookmarkSlice';
import modalReducer from './modalSlice';
import signupReducer from './signupSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarkReducer,
    modal: modalReducer,
    signup: signupReducer,
  },
});

export default store;
