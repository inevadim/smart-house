import { configureStore } from '@reduxjs/toolkit';
import roomSlice from './roomSlice';
export const store = configureStore({
  reducer: {
    room: roomSlice,
  },
});
