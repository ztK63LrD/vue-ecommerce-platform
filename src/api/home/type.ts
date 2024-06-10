// 公共接口
interface BaseResponse {
    code: string
    msg: string
}

// 首页分类总体相关内容数据
export interface CategoryData extends BaseResponse {
    result: resultData[]
}

export interface resultData {
    id: string
    name: string
    picture: string
    goods: goodsData[]
    children: childrenData[]
}

export interface goodsData {
    id: string
    name: string
    price: number
    picture: string
    desc: string
    orderNum?: number
}

export interface childrenData extends resultData {}

// 首页轮播图相关内容数据
export interface BannerData extends BaseResponse {
    result: bannerResult[]
}
export interface bannerResult {
    id: string
    type: string
    imgUrl: string
    hrefUrl: string
}

// 首页新鲜好物相关内容数据
export interface NewData extends BaseResponse {
    result: newResult[]
}
export interface newResult {
    id: string
    name: string
    price: number
    picture: string
    desc: string
    orderNum: number
}

// 首页人气推荐相关内容数据
export interface RecommendData extends BaseResponse {
    result: recommendResult[]
}
export interface recommendResult {
    id: string
    title: string
    picture: string
    alt: string
}

// 首页产品相关内容数据
export interface ProductData extends BaseResponse {
    result: productResult[]
}
export interface productResult {
    id: string
    name: string
    picture: string
    saleInfo: string
    goods: productGoodsData[]
    children: productChildrenData[]
}
interface productGoodsData extends goodsData {}

interface productChildrenData {
    id: string
    name: string
    layer: number
    parent: any
}