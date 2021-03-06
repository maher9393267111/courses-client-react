import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('usertoken')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('usertoken')}`;
  }

  return req;
});

export const deleteParentCategory = (id) => API.delete(`/parentcat/removeparentcat/${id}`);

// all parent categories

export const fetchAllParentCategories = () => API.get('/parentcat/allParentCats');

// delete old image from cloudinary

export const deleteOldImageapi = (image) => API.post('/parentcat/removeimage', { image });

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);









// export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
// export const createPost = (newPost) => API.post('/posts', newPost);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

// export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
