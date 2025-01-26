import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: [], 
  reducers: {
    addReservation(state, action) {
      state.push(action.payload);
    },
    updateReservation(state, action) {
      const index = state.findIndex(reservation => reservation.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteReservation(state, action) {
      return state.filter(reservation => reservation.id !== action.payload);
    },
  },
});

export const { addReservation, updateReservation, deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
