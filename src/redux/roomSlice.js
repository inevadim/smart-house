import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sockets: JSON.parse(localStorage.getItem('sockets')) || [],
  light: JSON.parse(localStorage.getItem('light')) || [],
};

export const roomSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    addSocket(state, action) {
      state.sockets.push(action.payload);
    },
    deleteSocket(state, action) {
      state.sockets = state.sockets.filter(item => item.id !== action.payload);
    },
    changeVisibleSocket(state, action) {
      let index = state.sockets.findIndex(e => e.id === action.payload);
      if (index > -1) {
        state.sockets[index].activ = !state.sockets[index].activ;
      }
    },
    addLight(state, action) {
      state.light.push(action.payload);
    },
    deleteLight(state, action) {
      state.light = state.light.filter(item => item.id !== action.payload);
    },
    changeLight(state, action) {
      let index = state.light.findIndex(e => e.id === action.payload.id);
      if (index > -1) {
        state.light[index].valueInput = action.payload.countInput;
      }
    },
  },
});

export const { addSocket, deleteSocket, changeVisibleSocket, addLight, deleteLight, changeLight } =
  roomSlice.actions;

export default roomSlice.reducer;
