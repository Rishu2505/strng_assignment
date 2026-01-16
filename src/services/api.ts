import axios from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

// Generic service wrapper for better error handling
export const handleApiError = (error: any) => {
    if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.error('API Error Response:', error.response.data);
        throw new Error(error.response.data.message || 'Server error occurred');
    } else if (error.request) {
        // Request was made but no response was received
        console.error('API No Response:', error.request);
        throw new Error('Network timeout or no response from server');
    } else {
        // Something else happened while setting up the request
        console.error('API setup error:', error.message);
        throw new Error('An unexpected error occurred');
    }
};
