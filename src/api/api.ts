import axios from "axios";
import {PhotosType, ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ccd72c64-da46-4e68-ace8-41333a566ebf"
    }
});

// user
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id: number = 1) {
        return instance.delete(`follow/${id}`)
    },
    follow(id: number = 1) {
        return instance.post<APIResponseType>(`follow/${id}`)
    },
    getUserProfile(id: number) {
        console.warn('Obsolete method! Please use the profileAPI object.')
        return profileAPI.getUserProfile(id);
    },
}

// profile
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => (response.data));
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status});
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}

// auth
export const authAPI = {
    me() {
        return instance.get<APIResponseType<meResponseDataType>>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string | null, password: string | null, rememberMe: boolean = false) {
        return instance.post<APIResponseType<loginResponseDataType, ResultCodesEnum>>(`auth/login`, {
            email,
            password,
            rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

// types
type APIResponseType<T = {}, RC = ResultCodesEnum> = {
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

export type SavePhotoResponseDataType = {
    photos: PhotosType
}

// enums
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}