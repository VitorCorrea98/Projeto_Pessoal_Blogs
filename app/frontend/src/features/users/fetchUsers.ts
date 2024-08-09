import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await fetch(`${API_URL}/users`, { method: 'GET' });
  const data = await response.json();
  return data;
});
