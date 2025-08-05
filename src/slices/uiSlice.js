// /src/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, clearNotifications } = uiSlice.actions;
export default uiSlice.reducer;
