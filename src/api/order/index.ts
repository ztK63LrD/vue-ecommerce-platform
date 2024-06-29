// 个人中心模块处理
import http from '@/utils/http'

// 统一管理接口
enum API {
    // 订单
    USERORDER = '/member/order'
}

// 暴露请求函数
// 获取订单详情数据接口
export const reqGetOrder = (data: any) =>
    http.get<any, any>(API.USERORDER, data);