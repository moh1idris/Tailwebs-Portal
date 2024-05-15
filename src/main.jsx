import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Components/userSlice';
import authReducer from './Components/AuthSlice'; // Add the authReducer import
import App from './App';
import './index.css'

// Load state from localStorage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage whenever the state changes
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle potential errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer, // Add the authReducer to the root reducer
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
