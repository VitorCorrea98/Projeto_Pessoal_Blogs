import { createSlice } from '@reduxjs/toolkit';
import { UsersType } from '../../types/users.type';
import { fetchUsers } from './fetchUsers';

type UsersState = {
  users: UsersType[]
};

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export default usersSlice.reducer;
