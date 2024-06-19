// 统一管理分类数据的相关接口
import http from '@/utils/http'
// 导入接口数据类型
import type { CategoryListResult, TwoCategoryListResult, GoodsListResult } from '@/api/category/type'
// 统一管理接口
enum API {
    // 一级分类页面
    CATEGORY = '/category',
    // 二级分类页面
    TWO_CATEGORY = '/category/sub/filter',
    // 二级分类基础商品
    TWO_CATEGORY_GOODS = '/category/goods/temporary',
}

// 暴露请求函数
// 获取首页分类数据
export const reqGetCategory = (id: string) =>
    http.get<any, CategoryListResult>(API.CATEGORY, { params: { id: id } });

// 获取二级分类数据
export const reqGeTwotCategory = (id: string) =>
    http.get<any, TwoCategoryListResult>(API.TWO_CATEGORY, { params: { id: id } });

// 获取二级分类基础商品数据
export const reqGetTwoCategoryGoods = (data: any) =>
    http.post<any, GoodsListResult>(API.TWO_CATEGORY_GOODS, data)
