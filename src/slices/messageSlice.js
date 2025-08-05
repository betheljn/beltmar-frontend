// /src/slices/messageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    direct: [],
    group: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.direct.push(action.payload);
    },
    addGroupMessage: (state, action) => {
      state.group.push(action.payload);
    },
    clearMessages: (state) => {
      state.direct = [];
      state.group = [];
    },
  },
});

export const { addMessage, addGroupMessage, clearMessages } = messageSlice.actions;
export default messageSlice.reducer;
