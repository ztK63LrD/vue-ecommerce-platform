<!-- 二级分类页面 -->
<template>
    <div class="subCategory">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${subCategoryData?.parentId}` }">{{ subCategoryData?.parentName }}</el-breadcrumb-item>
                <el-breadcrumb-item>居家生活用品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!-- 商品列表-->
                <goods-item 
                    v-for="goods in goodList" 
                    :goods="goods" :key="goods.id" 
                    style="width: 220px; "
                >
                </goods-item>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// 导入接口函数
import { reqGeTwotCategory, reqGetTwoCategoryGoods } from "@/api/category";
// 导入接口数据类型
import type { TwoCategoryListResult, TwoCategoryList, GoodsListResult, GoodsItem } from '@/api/category/type'

import { useRoute } from "vue-router";

// 二级分类数据
let subCategoryData = ref<TwoCategoryList>();
let route = useRoute();
// 基础列表数据渲染
let goodList = ref<GoodsItem[]>([]);
let reqData = reactive({ 
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
}) 
// 是否禁用
let disabled = ref(false)

// 获取二级分类数据
const getSubCategoryData = async () => {
    let res: TwoCategoryListResult = await reqGeTwotCategory(route.params.id as string)
    let res1: GoodsListResult = await reqGetTwoCategoryGoods(reqData)
    subCategoryData.value = res.result
    goodList.value = res1.result.items
}

// tab切换回调
const tabChange = () => {
    reqData.page = 1
    getSubCategoryData()
}

// 无限加载回调
const load = async () => {
    // 获取下一页的数据
    reqData.page++
    let res: GoodsListResult = await reqGetTwoCategoryGoods(reqData)
    goodList.value = [...goodList.value, ...res.result.items]
    // 判断是否加载完成
    if (res.result.items.length === 0) {
        disabled.value = true
    }
}

onMounted(() => {
    getSubCategoryData()
})
</script>

<style scoped lang="scss">
.subCategory {
    width: 100%;
    padding: 0 100px;
    background-color: #e4e4e4;
    .bread-container {
        padding: 25px 0;
    }
    .sub-container {
        padding: 20px 10px;
        background-color: #fff;
        .body {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
            padding: 0 10px;
        }
    }
}
</style>
