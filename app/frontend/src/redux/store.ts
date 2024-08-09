import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../features/posts/postsSlice';
import userSlice from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
