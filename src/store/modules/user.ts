import { defineStore } from "pinia";
import { ref } from "vue"
import { reqLogin } from '@/api/login';

export const useUserStore = defineStore("user", () => {
    let userInfo = ref();
    // 用户数据
    const getUserInfo = async (data: any) => {
        let res = await reqLogin(data)
        userInfo.value = res.result;
    }
    // 清除用户数据
    const clearUserInfo = () => {
        userInfo.value = {};
    }

    return { userInfo, getUserInfo, clearUserInfo }
}, { persist: true })
