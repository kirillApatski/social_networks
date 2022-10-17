import axios from "axios";


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
            .then(response => response.data)
    },
    followUser(userId: string){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollowUser(userId: string){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    auth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getUserProfile() {
        return profileAPI.getUserProfile
    }
}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

