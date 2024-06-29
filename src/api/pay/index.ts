// 统一管理订单页面数据的相关接口
import http from '@/utils/http'

// 统一管理接口
enum API {
    // 订单
    CREATEORDER = '/member/order/'
}

// 暴露请求函数
// 获取订单详情数据接口
export const reqGetOrder = (id: any) =>
    http.get<any, any>(API.CREATEORDER + id);
