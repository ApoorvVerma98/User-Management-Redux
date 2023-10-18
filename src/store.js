import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    users: (state = [], action) => {
      switch (action.type) {
        case 'ADD_USER':
          return [...state, action.payload];
        default:
          return state;
      }
    },
  },
});

export default store;
