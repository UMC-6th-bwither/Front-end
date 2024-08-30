import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phone: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  zipcode: '',
  address: '',
  addressDetail: '',
  petAllowed: '',
  cohabitant: '',
  cohabitantCount: '',
  familyAgreement: '',
  employmentStatus: '',
  commuteTime: '',
  petExperience: false,
  currentPet: '',
  futurePlan: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupStep1: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateSignupStep2: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetSignup: () => initialState,
  },
});

export const { updateSignupStep1, updateSignupStep2, resetSignup } =
  signupSlice.actions;
export default signupSlice.reducer;
