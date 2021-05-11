import axios from 'axios';

export const getCategories = async (locale = 'en_US', baseUrl = 'https://api.tink.com/api/v1') => {
  const response = await axios.get(`${baseUrl}/categories`, {
    params: { locale },
  });
  return response.data;
};
