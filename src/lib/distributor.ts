import { Order, Receipt, User } from '@/types'
import axios from 'axios'

export const getAllDistributors = async () => {
    const response = await axios.get<User[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors`)
    return response.data
}

export const getDistributorById = async (id: string) => {
    const response = await axios.get<User>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/${id}`)
    return response.data
}

export const getDistributorReceipts = async (jwt: string | null) => {
    if (!jwt)
        return;
    const response = await axios.get<Receipt[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/receipts`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })

    return response.data
}

export const getDemands = async () => {
    const response = await axios.get<Order[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/demand/`)

    return response.data;
}


export const acceptOrder = async (jwt: string | null, orderId: string) => {
    if (!jwt)
        return;
    await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/demand/reject/${orderId}/`, undefined, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const rejectOrder = async (jwt: string | null, orderId: string) => {
    if (!jwt)
        return;
    await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/distributors/demand/reject/${orderId}/`, undefined, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
