import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsTypes } from '../../types/posts.type';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchPosts = createAsyncThunk<PostsTypes[]>(
  'posts/fetch',
  async () => {
    const response = await fetch(`${API_URL}/posts`, { method: 'GET' });
    const data: PostsTypes[] = await response.json();
    return data;
  },
);
