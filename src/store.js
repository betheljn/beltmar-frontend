import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/messageSlice';
import uiReducer from './slices/uiSlice';
import agentReducer from './slices/agentSlice';
import authReducer from './slices/authSlice';
// ... other slices

const store = configureStore({
  reducer: {
    messages: messageReducer,
    ui: uiReducer,
    agent: agentReducer,
    auth: authReducer,
    // ... other reducers
  },
});

export default store;
