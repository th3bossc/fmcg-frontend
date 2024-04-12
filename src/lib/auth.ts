import { Role } from '@/types';
import axios from 'axios'


export const loginUser = async (email: string, password: string) => {
    const response = await axios.post<{
        access: string,
        refresh: string,
    }>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/`, {
        email,
        password
    });
    return response.data;
}

export const getProfile = async (token: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const registerUser = async (
    email: string,
    password: string,
    name: string,
    contact: string,
    address: string,
    role: Role
) => {
    if (role === "RETAILER") {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers/`, {
            email,
            password,
            name,
            contact,
            address,
        });
        return response.data;
    }
    else {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/`, {
            email,
            password,
            name,
            contact,
            address,
        });
        return response.data;
    }
}