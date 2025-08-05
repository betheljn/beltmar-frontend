// /src/slices/agentSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import agentApi from '../api/agentApi';

// Fetch past agent tasks
export const fetchAgentTasks = createAsyncThunk(
  'agent/fetchAgentTasks',
  async () => {
    const response = await agentApi.getTasks();
    return response.data;
  }
);

// Submit a new agent task
export const submitAgentTask = createAsyncThunk(
  'agent/submitAgentTask',
  async (payload) => {
    const response = await agentApi.submitTask(payload);
    return response.data;
  }
);

const agentSlice = createSlice({
  name: 'agent',
  initialState: {
    loading: false,
    tasks: [],
    currentTask: null,
    error: null
  },
  reducers: {
    clearCurrentTask: (state) => {
      state.currentTask = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgentTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgentTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchAgentTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(submitAgentTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAgentTask.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTask = action.payload;
        state.tasks.unshift(action.payload);
      })
      .addCase(submitAgentTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearCurrentTask } = agentSlice.actions;
export default agentSlice.reducer;
