import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";

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
        return instance.post<ResponseType>(`follow/${id}`)
    },
    getUserProfile(userId: number) {
        console.warn('Obsolete method! Please use the profileAPI object.')
        return profileAPI.getUserProfile(userId);
    },
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/`+ userId)
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
    me() {
        return instance.get<ResponseType<meResponseDataType>>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string | null, password: string | null, rememberMe: boolean = false) {
        return instance.post<ResponseType<loginResponseDataType, ResultCodesEnum>>(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

// types
type ResponseType<T = {}, RC = ResultCodesEnum> = {
    data: T
    messages: Array<string>
    resultCode: RC
}

export type meResponseDataType = {
    userId: number | null
    email: string | null
    login: string | null
}

export type loginResponseDataType = {
    userId: number
}

// enums
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}