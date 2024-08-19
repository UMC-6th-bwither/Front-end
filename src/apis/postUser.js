import { POST } from './api';

export const postLogin = async ({ username, password }) => {
  const body = {
    username,
    password,
  };

  const response = await POST(`/login`, body);
  return response;
};
