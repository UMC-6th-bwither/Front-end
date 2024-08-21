/* eslint-disable camelcase */
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
