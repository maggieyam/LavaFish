import axios from 'axios';

export const createPost = postData => {
  return axios.post('/api/posts/create', postData);
}

export const fetchPost = postId => {
  return axios.get(`/api/posts/${postId}`);
}

export const fetchPosts = () => {
  return axios.get('/api/posts/');
}

export const fetchUserPosts = userId => {
  return axios.get(`api/posts/user/${userId}`);
}

export const deletePosts = filter => {
  return axios.delete('/api/posts/delete', filter)
}

