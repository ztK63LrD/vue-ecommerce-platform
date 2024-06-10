// axios基础封装
import axios from 'axios'

const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 请求拦截器
http.interceptors.request.use(config => {
    // 请求拦截器
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(res => {
    return res.data
},  error => {
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
                msg = '网络出现问题'
                break
        }
        ElMessage({
            type: 'error',
            message: msg,
        })
        return Promise.reject(error)
    }
)

export default http