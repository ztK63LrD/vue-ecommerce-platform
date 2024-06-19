// 统一管理商品详情页数据的相关接口
import http from '@/utils/http'
// 统一管理接口
enum API {
    // 一级分类页面
    GOODS = '/goods',
    HOT = '/goods/hot'
}

// 暴露请求函数
// 获取首页分类数据
export const reqGetDetails = (id: string) =>
    http.get<any, any>(API.GOODS, { params: { id: id } });

// 获取热榜数据
export const reqGetHot = ({ id, type, limit = 3 }: any) => 
    http.get<any, any>(API.HOT, { params: { id, type, limit } });

