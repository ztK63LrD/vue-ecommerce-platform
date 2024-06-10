// 统一管理分类数据的相关接口
import http from '@/utils/http'
// 导入接口数据类型
import type { CategoryListResult } from '@/api/category/type'
// 统一管理接口
enum API {
    CATEGORY = '/category',
}

// 暴露请求函数
// 获取首页分类数据
export const reqGetCategory = (id: string) =>
    http.get<any, CategoryListResult>(API.CATEGORY, { params: { id: id } });
