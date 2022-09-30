import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ccd72c64-da46-4e68-ace8-41333a566ebf"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id: number = 1) {
        return instance.delete(`follow/${id}`)
    },
    follow(id: number = 1) {
        return instance.post(`follow/${id}`)
    }
}

