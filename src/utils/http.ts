// axios基础封装
import axios from 'axios'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 请求拦截器
http.interceptors.request.use(config => {
    // 从pinia中获取token数据
    const userStore = useUserStore()
    // 按照后端的要求拼接token字段
    const token = userStore.userInfo?.token
    if (token) { 
        config.headers.Authorization = `Bearer ${token}` 
    } else {
        // 如果没有token，则跳转到登录页
        router.push('/login')
    }
    // 请求拦截器
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(res => {
    return res.data
},  error => {
        // 从pinia中获取token数据
        const userStore = useUserStore()
        if (error.response?.status === 401) {
            userStore.clearUserInfo()
            ElMessage({
                type: 'warning',
                message: '登录过期，请重新登录',
            })
            // 如果没有token，则跳转到登录页
            router.push('/login')
        }
    
        //处理网络错误
        let msg = ''
        const status = error.response?.status
        switch (status) { 
            case 401:
                msg = 'token过期'
                break
            case 403:
                msg = '无权访问'
                break
            case 404:
                msg = '请求地址错误'
                break
            case 500:
                msg = '服务器出现问题'
                break
            default:
                ElMessage({
                    type: 'warning',
                    message: error.response?.data.msg || '未知错误',
                })
                break
        }
        return Promise.reject(error)
    }
)

export default http