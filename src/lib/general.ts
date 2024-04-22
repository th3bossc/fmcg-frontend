import axios from 'axios';
import { Route, Notification, Product } from '@/types';
export const getNotifications = async (jwt: string | null) => {
    if (!jwt)
        return;
    const response = await axios.get<Notification[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notifications`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    return response.data
}

export const getRoutes = async () => {
    const response = await axios.get<Route[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/routes`)
    return response.data
}

export const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`)
    return response.data
}

export const createProduct = async (formData: Omit<Product, 'id'>) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/`, formData);
    return response.data;
}