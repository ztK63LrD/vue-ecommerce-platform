// 公共接口
interface BaseResponse {
    code: string
    msg: string
}

// 分类列表接口
export interface CategoryListResult extends BaseResponse{
    result: CategoryList
}

// 分类列表数据接口
export interface CategoryList {
    id: number
    name: string
    picture: string
    children: CategoryDetailResult[]
}
// 分类详情接口
export interface CategoryDetailResult {
    id: string
    name: string
    parentId: string
    parentName: string
    picture: string
    saleProperties: string
    categories: string
    brands: string
    goods: CategoryDetail[]
}
// 分类详情数据接口
export interface CategoryDetail {
    id: string
    name: number
    picture: string
    price: string
    desc: string
    orderNum: number
}