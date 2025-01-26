import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profiles',
  initialState: [],
  reducers: {
    addProfile(state, action) {
      state.push(action.payload);
    },
    updateProfile(state, action) {
      const index = state.findIndex(profile => profile.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProfile(state, action) {
      return state.filter(profile => profile.id !== action.payload);
    },
  },
});

export const { addProfile, updateProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
