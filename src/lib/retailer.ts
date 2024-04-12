import { Order } from '@/types'
import axios from 'axios'


export const getAllRetailers = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers`)
    return response.data
}

export const getRetailerById = async (id: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers/${id}`)
    return response.data
}


export const getOrders = async (jwt: string | null) => {
    if (!jwt)
        return;
    const response = await axios.get<Order[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers/orders`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    return response.data
}

export const getRetailerReceipts = async (jwt: string | null) => {
    if (!jwt)
        return;
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers/receipts/`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    return response.data
}