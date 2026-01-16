import axios from 'axios';
import { User, Post } from '@/src/types';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const userService = {
    getUsers: async (): Promise<User[]> => {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    },
    getUserPosts: async (userId: number, page: number = 1, limit: number = 10): Promise<Post[]> => {
        const response = await axios.get(`${API_URL}/posts?userId=${userId}&_page=${page}&_limit=${limit}`);
        return response.data;
    },
};
