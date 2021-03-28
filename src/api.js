import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers = {
        ...config.headers,
        Authorization: 'Bearer ' + token,
    }
    return config;
})


const API = {
    signup: (payload) => axiosInstance.post('/auth/signup', payload),
    login: (payload) => axiosInstance.post('/auth/login', payload),
    me: () => axiosInstance.get('/users/me'),

    createPost: (payload) => axiosInstance.post('/posts', payload),
    getPosts: () => axiosInstance.get('/posts'),
    getPost: (id) => axiosInstance.get(`/posts/${id}`),
    deletePost: (id) => axiosInstance.delete(`/posts/${id}`),

    addLike: (postId, payload) => axiosInstance.post(`/posts/${postId}/likes`, payload),
    addDislike: (postId, payload) => axiosInstance.post(`/posts/${postId}/likes`, payload),
}

export default API;

