// 统一管理首页数据的相关接口
import http from '@/utils/http'
// 导入接口数据类型
import type { CategoryData, BannerData, NewData, RecommendData, ProductData } from '@/api/home/type'
// 统一管理接口
enum API {
    CATEGORY = '/home/category/head',
    BANNER = '/home/banner',
    NEW = '/home/new',
    HOT = '/home/hot',
    GOODS = '/home/goods'
}

// 暴露请求函数
// 获取首页分类数据
export const reqGetCategoryData = () =>
    // <a,b> 第一个类型参数表示请求数据的类型，第二个类型参数表示响应数据的类型。
    http.get<any, CategoryData>(API.CATEGORY)

// 获取首页banner数据
export const reqGetBannerData = (params: any = {}) => {
    // 默认为1，商品为2
    const distributionSite = params?.distributionSite || '1';  
    return http.get<any, BannerData>(API.BANNER, {  
        params: {  
            ...params, // 保留原始params中的所有其他字段  
            distributionSite // 覆盖或添加distributionSite字段  
        }  
    })
}


// 获取首页新鲜好物数据
export const reqGetNewData = () =>
    http.get<any, NewData>(API.NEW)

// 获取首页人气推荐数据
export const reqGetHotData = () =>
    http.get<any, RecommendData>(API.HOT)

// 获取首页产品列表数据
export const reqGetProductListData = () => 
    http.get<any, ProductData>(API.GOODS)