/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { GET } from './api';

export const getBreederReview = async (breederId) => {
  try {
    const response = await GET(`/post?breederId=${breederId}`);

    return response.result;
  } catch (error) {
    console.error('Error fetching breeder reviews:', error);
    throw error;
  }
};
