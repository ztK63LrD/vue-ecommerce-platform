// 公共接口
interface BaseResponse {
    code: string
    msg: string
}

// 一级分类列表接口
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

// 二级分类总接口数据
export interface TwoCategoryListResult extends BaseResponse{
    result: TwoCategoryList
}

// 二级分类数据接口
export interface TwoCategoryList {
    id: string
    name: string
    parentId: string
    parentName: string
    picture: string
    brands: brands[]
    categories: categories[]
    goods: goods[]
    saleProperties: saleProperties[]
}
// brands数据接口类型
export interface brands {
    id: string
    name: string
    nameEn: string
    picture: string
    place: string
    logo: string
    desc: string
    type: any
}
// categories数据接口类型
export interface categories {
    id: string
    name: string
    layer: number
    parent: any
}
// goods数据接口类型
export interface goods {
    id: string
    name: string
    picture: string
    price: string
    desc: string
    orderNum: number
}
// saleProperties数据接口类型
export interface saleProperties {
    id: string
    name: string
    properties: properties[]
}

// properties数据接口类型
export interface properties {
    id: string
    name: string
}

// 基础商品数据列表接口
export interface GoodsListResult extends BaseResponse{
    result: GoodsList
}
// 基础商品数据接口
export interface GoodsList {
    page: number
    pages: number
    pageSize: number
    counts: number
    items: GoodsItem[]
}
// 基础商品数据接口类型
export interface GoodsItem {
    id: string
    name: string
    picture: string
    price: string
    desc: string
    orderNum: number
}

