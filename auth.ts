import { useEffect } from 'react';

const TOKEN_KEY = 'auth_token';

export const setAuthToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const useAuth = () => {
    useEffect(() => {
        const token = getAuthToken();
        if (token) {
            // Logic to handle authenticated state
        }
    }, []);
};