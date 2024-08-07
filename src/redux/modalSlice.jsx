import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeleteAccountModalOpen: false,
  isDeleteReasonModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openDeleteAccountModal: (state) => {
      const status = state;
      status.isDeleteAccountModalOpen = true;
    },
    closeDeleteAccountModal: (state) => {
      const status = state;
      status.isDeleteAccountModalOpen = false;
    },
    openDeleteReasonModal: (state) => {
      const status = state;
      status.isDeleteReasonModalOpen = true;
    },
    closeDeleteReasonModal: (state) => {
      const status = state;
      status.isDeleteReasonModalOpen = false;
    },
  },
});

export const {
  openDeleteAccountModal,
  closeDeleteAccountModal,
  openDeleteReasonModal,
  closeDeleteReasonModal,
} = modalSlice.actions;
export const selectModal = (state) => ({
  isDeleteAccountModalOpen: state.modal.isDeleteAccountModalOpen,
  isDeleteReasonModalOpen: state.modal.isDeleteReasonModalOpen,
});

export default modalSlice.reducer;
