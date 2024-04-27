import { Order, Product, Route } from '@/types'
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

export const createOrder = async (jwt: string | null, formData: {
    route: Route,
    product: Product,
    required: string
}) => {
    if (!jwt || isNaN(formData.required as any))
        return;
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/retailers/orders/`, {
        route: formData.route.id,
        product: formData.product.id,
        required: +formData.required
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    return response.data
}