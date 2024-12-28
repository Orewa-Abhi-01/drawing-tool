// File: app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/features/menuSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    menu: menuReducer, // Add your reducers here
  },
});

export default store;
