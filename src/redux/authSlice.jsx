import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userId: null,
  username: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
        username: action.payload.username,
        token: action.payload.token,
        role: action.payload.role,
      };
    },
    logout: (state) => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        username: null,
        token: null,
        role: null,
      };
    },
    loadUserFromStorage: (state) => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userId = localStorage.getItem('userId');
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

      if (isLoggedIn && userId && token) {
        return {
          ...state,
          isLoggedIn: true,
          userId,
          username,
          token,
          role,
        };
      }

      return initialState;
    },
  },
});

export const { login, logout, loadUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
