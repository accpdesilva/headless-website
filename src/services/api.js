import axios from 'axios';
const API_URL = 'http://localhost/booster/wp-json/wp/v2';

export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};
