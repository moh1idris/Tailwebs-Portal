

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.userData = null;
    },
    clearUserData: (state) => {
      state.userData = null; 
    },
    resetState: (state) => initialState, 
  },
});


export const { login, logout, resetState,clearUserData } = authSlice.actions;
export default authSlice.reducer;

