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
    },
    getUserProfile(userId: number) {
        console.warn('Obsolete method! Please use the profileAPI object.')
        return profileAPI.getUserProfile(userId);
    },
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/`+ userId)
            .then(response => (response.data));
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },
}

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
}
