// 统一管理登录数据的相关接口
import http from '@/utils/http'
// 统一管理接口
enum API {
    LOGIN = '/login',
    LIKELIST = '/goods/relevant',
}

// 暴露请求函数
// 获取首页分类数据
export const reqLogin = (data: Object) =>
    http.post<any, any>(API.LOGIN, data)

// 获取个人中心数据
export const reqLikelist = ({ limit = 4 }) =>
    http.post<any, any>(API.LIKELIST, { params: { limit: limit } })
