import axios from 'axios';

export function getAllPosts() {
  const config = {
    method: 'GET',
    url: '/posts',
  };
  return axios(config);
}