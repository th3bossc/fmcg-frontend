import axios from 'axios'


export const loginUser = async (email: string, password: string) => {
    const response = await axios.post<{
        access: string,
        refresh: string,
    }>('http://localhost:8000/api/token/', {
        email,
        password
    });
    console.log(response.data);
    return response.data;
}

export const getProfile = async (token: string) => {
    try {
        const response = await axios.get('http://localhost:8000/api/user/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}