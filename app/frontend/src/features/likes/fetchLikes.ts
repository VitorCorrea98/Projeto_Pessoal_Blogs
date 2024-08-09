import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchLikes = createAsyncThunk(
  'likes/post',
  async ({ userId, postId }: { userId: number, postId: number }) => {
    const response = await fetch(`${API_URL}/likes`, {
      method: 'POST',
      body: JSON.stringify({ postId, userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
);
