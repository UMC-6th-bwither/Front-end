import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookmarkReducer from './bookmarkSlice';
import modalReducer from './modalSlice';
import signupReducer from './signupSlice';
import breederSignupReducer from './breederSignupSlice';
import menuReducer from './menuSlice';
import termsReducer from './termsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarkReducer,
    modal: modalReducer,
    signup: signupReducer,
    breederSignup: breederSignupReducer,
    menu: menuReducer,
    terms: termsReducer,
  },
});

export default store;
