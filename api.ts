import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

// Function to authenticate user
export const authenticateUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Authentication failed');
    }
};

// Function to register a new user
export const registerUser = async (profileDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, profileDetails);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Registration failed');
    }
};

// Function to log a habit entry
export const logHabitEntry = async (habitId, entryDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/habits/${habitId}/log`, entryDetails);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Logging habit entry failed');
    }
};

// Function to get user habits
export const getUserHabits = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/habits`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Fetching habits failed');
    }
};