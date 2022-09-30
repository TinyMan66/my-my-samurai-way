import axios from "axios";


export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => response.data);
}

export const unfollow = (id: number = 1) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
        withCredentials: true,
        headers: {
            "API-KEY": "ccd72c64-da46-4e68-ace8-41333a566ebf"
        }
    })
}
export const follow = (id: number = 1) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "ccd72c64-da46-4e68-ace8-41333a566ebf"
        }
    })
}

