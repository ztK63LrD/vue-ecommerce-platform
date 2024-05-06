// 统一管理我们项目用户的相关接口
import http from '@/utils/http'
import type { loginForm, loginResponseData, userResponseData } from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
// 暴露请求函数
// 登录接口的方法
export const reqLogin = (data: loginForm) =>
  http.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息接口方法
export const reqUserInfo = () =>
  http.get<any, userResponseData>(API.USERINFO_URL)