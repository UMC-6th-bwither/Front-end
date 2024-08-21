import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breederJoinDTO: {
    name: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    zipcode: '',
    address: '',
    addressDetail: '',
    animal: '',
    species: [],
    tradeName: '',
    tradePhone: '',
    tradeEmail: '',
    representative: '',
    registrationNumber: '',
    licenseNumber: '',
    snsAddress: '',
    animalHospital: '',
    certificateNames: [],
    breedingCareers: [
      {
        tradeName: '',
        joinDate: '',
        leaveDate: '',
        currentlyEmployed: false,
      },
    ],
  },
  certificateImages: [],
  kennelImages: [],
};

const breederSignupSlice = createSlice({
  name: 'breederSignup',
  initialState,
  reducers: {
    updateSignupStep1: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateSignupStep2: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateSignupStep3: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateSignupStep4: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetSignup: () => initialState,
  },
});

export const {
  updateSignupStep1,
  updateSignupStep2,
  updateSignupStep3,
  updateSignupStep4,
  resetSignup,
} = breederSignupSlice.actions;
export default breederSignupSlice.reducer;
