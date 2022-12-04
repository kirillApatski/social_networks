import axios from "axios";
import {FromDataType} from "../components/Login/Login";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "981588b4-bdf2-44d7-86f8-d7ae7d7f8770"
    }
})

export const userAPI = {

    getUsers(currentPage: number, pagesSize: number) {
        return  instance.get(`users?page=${currentPage}&count=${pagesSize}`)
    },
    followUser(userId: number){
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile() {
        return profileAPI.getUserProfile
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(loginFormData: FromDataType) {
        return instance.post(`auth/login`, loginFormData)
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}

