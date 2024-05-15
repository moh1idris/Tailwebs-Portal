import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isModalOpen: false,
  refreshUserData: false, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
      state.refreshUserData = true; // Set refreshUserData to true after adding user
    },
    editUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
        state.refreshUserData = true; // Set refreshUserData to true after editing user
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id); // Remove user with specified ID
      state.refreshUserData = true; // Set refreshUserData to true after deleting user
    },
    refreshUserList: (state) => {
      state.refreshUserData = false; // Reset refreshUserData after refreshing user list
    },
  },
});

export const { openModal, closeModal, addUser, editUser, deleteUser, refreshUserList } = userSlice.actions;
export default userSlice.reducer;

