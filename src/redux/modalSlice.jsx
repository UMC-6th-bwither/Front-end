import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeleteAccountModalOpen: false,
  isDeleteReasonModalOpen: false,
  page: 'general', // 페이지 구분
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
    openDeleteReasonModal: (state, action) => {
      const status = state;
      status.isDeleteReasonModalOpen = true;
      status.page = action.payload;
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
