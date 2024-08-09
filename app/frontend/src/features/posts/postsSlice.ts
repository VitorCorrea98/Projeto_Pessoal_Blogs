import { createSlice } from '@reduxjs/toolkit';
import { PostsTypes } from '../../types/posts.type';
import { fetchPosts } from './fetchPosts';

type PostsState = {
  status: 'loading' | 'idle';
  posts: PostsTypes[]
};

const initialState: PostsState = {
  status: 'idle',
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.status = 'idle';
    });
  },
});

export default postsSlice.reducer;
