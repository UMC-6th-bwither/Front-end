import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const request = async ({ url, method, body, params, isMultipart }) => {
  try {
    const config = {
      baseURL,
      params,
      withCredentials: true,
      headers: {
        'Content-Type': isMultipart
          ? 'multipart/form-data'
          : 'application/json',
      },
    };

    const token = localStorage.getItem('accessToken');

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const response =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'patch' && (await axios.patch(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' &&
        (await axios.delete(url, {
          baseURL,
          params,
          headers: { Authorization: token },
          data: body,
        }))) ||
      {};
    return response.data;
  } catch (error) {
    console.log('api 요청 에러', error);
    throw error;
  }
};

export const GET = (url, token) => request({ url, method: 'get', token });
export const POST = (url, body, isMultipart = false) =>
  request({ url, method: 'post', body, isMultipart });
export const PATCH = (url, body, token) =>
  request({ url, method: 'patch', body, token });
export const PUT = (url, body, token) =>
  request({ url, method: 'put', body, token });
export const DELETE = (url, body, token) =>
  request({ url, method: 'delete', body, token });
