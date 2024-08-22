/* eslint-disable camelcase */
/* eslint-disable no-console */
import { POST } from './api';

export const postSignUp = async ({
  name,
  phone,
  email,
  username,
  password,
  zipcode,
  address,
  addressDetail,
  petAllowed,
  cohabitant,
  familyAgreement,
  employmentStatus,
  commuteTime,
  petExperience,
  currentPet,
  futurePlan,
}) => {
  const body = {
    name,
    phone,
    email,
    username,
    password,
    zipcode,
    address,
    addressDetail,
    petAllowed,
    cohabitant,
    familyAgreement,
    employmentStatus,
    commuteTime,
    petExperience,
    currentPet,
    futurePlan,
  };

  const response = await POST(`/user/join`, body);
  return response;
};

export const postLogin = async ({ username, password }) => {
  const body = {
    username,
    password,
  };

  const response = await POST(`/login`, body);
  return response;
};

export const postEmailSend = async (email) => {
  const body = {
    email,
  };

  const response = await POST(`/email/send`, body);
  return response;
};

export const postEmailVerify = async ({ email, verification_code }) => {
  const body = {
    email,
    verification_code,
  };

  const response = await POST(`/email/verify`, body);
  return response;
};

export const postBreederSignup = async ({
  breederJoinDTO,
  certificateImages,
  kennelImages,
}) => {
  const formData = new FormData();

  const jsonBreederJoinDTO = JSON.stringify(breederJoinDTO);
  const breederInfo = new Blob([jsonBreederJoinDTO], {
    type: 'application/json',
  });

  // breederJoinDTO를 JSON 문자열로 변환하여 추가
  formData.append('breederJoinDTO', breederInfo);

  // certificateImages를 FormData에 추가
  if (certificateImages && certificateImages.length > 0) {
    certificateImages.forEach((image) => {
      formData.append(`certificateImages`, image);
    });
  }

  // kennelImages를 FormData에 추가
  if (kennelImages && kennelImages.length > 0) {
    kennelImages.forEach((image) => {
      formData.append(`kennelImages`, image);
    });
  }

  // POST 요청 보내기
  try {
    const response = await POST('/breeder/join', formData, true); // true를 통해 multipart/form-data로 설정
    return response;
  } catch (error) {
    console.error('Error during breeder signup:', error);
    throw error;
  }
};
