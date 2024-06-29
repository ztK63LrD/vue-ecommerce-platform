// 统一管理结算页面数据的相关接口
import http from '@/utils/http'

// 统一管理接口
enum API {
    // 详情接口
    CHECKINFO = '/member/order/pre',
    // 订单
    CREATEORDER = '/member/order'
}

// 暴露请求函数
// 获取结算详情数据接口
export const reqCheckInfo = () =>
    http.get<any, any>(API.CHECKINFO);

// 创建订单
export const reqCreateOrder = (data: any) =>
    http.post<any, any>(API.CREATEORDER, data);

