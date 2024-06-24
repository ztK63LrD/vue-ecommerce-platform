// 统一管理登录数据的相关接口
import http from '@/utils/http'
// 统一管理接口
enum API {
    LOGIN = '/login',
}

// 暴露请求函数
// 获取首页分类数据
export const reqLogin = (data: Object) =>
    http.post<any, any>(API.LOGIN, data)
