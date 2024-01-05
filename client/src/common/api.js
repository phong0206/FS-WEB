import axios from 'axios';


const API_URL = import.meta.env.VITE_REACT_APP_API_URL


export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10 * 1000,
    validateStatus: (status) => status < 500,
});

export const register = async ({ email,
    password,
    lastName,
    firstName,
    confirmPassword }) => {
    const res = await api.post('api/v1/user/register', {
        email,
        password,
        lastName,
        firstName,
        confirmPassword
    });
    return res.data;
};