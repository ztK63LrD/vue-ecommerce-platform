// 统一管理购物车相关数据的接口
import http from '@/utils/http'
// 统一管理接口
enum API {
    CART = '/member/cart',
    MERGECART = '/member/cart/merge'
}

// 暴露请求函数
// 获取加入购物车数据
export const reqCartData = (data: Object) =>
    http.post<any, any>(API.CART, data)

// 获取购物车列表数据
export const reqCartListData = () =>
    http.get<any, any>(API.CART)

// 删除购物车数据
export const reqDeleteCartData = (ids: any) =>
    http.delete<any, any>(API.CART, {data: {ids: ids }})

// 合并购物车
export const reqMergeCartData = (data: any) =>
    http.post<any, any>(API.MERGECART, data)
