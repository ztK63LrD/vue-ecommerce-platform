<template>
    <div class="category">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="categoryData">{{ categoryData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 轮播图 -->
        <div class="banner">
            <el-carousel height="500px" autoplay :interval='3000'>
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img :src="item.imgUrl" alt="图片">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 商品列表 -->
        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-if="categoryData" v-for="item in categoryData.children" :key="item.id">
                    <RouterLink to="/">
                        <img :src="item.picture" />
                        <p>{{ item.name }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="ref-goods" v-if="categoryData"v-for="item in categoryData.children" :key="item.id">
            <div class="ref-goods-item">
                <div class="head">
                    <h3>- {{ item.name }}-</h3>
                </div>
                <div class="body">
                    <goods-item v-for="good in item.goods" :goods="good" :key="good.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
// 导入接口函数
import { reqGetCategory } from "@/api/category";
import { reqGetBannerData } from '@/api/home'
// 导入接口数据类型
import type { CategoryListResult, CategoryList } from '@/api/category/type'
import type { BannerData, bannerResult } from '@/api/home/type'

// 获取路由实例对象
const route = useRoute();
// 分类数据
let categoryData = ref<CategoryList>();
// 轮播图数据
let bannerList = ref<bannerResult[]>()

// 获取分类数据
const getCategory = async () => {
    let res: CategoryListResult = await reqGetCategory(route.params.id as string)
    categoryData.value = res.result
}
// 获取轮播图数据
const getBannerData = async () => {
    let res: BannerData = await reqGetBannerData({ distributionSite: '2' })
    bannerList.value = res.result
}

watch(() => route.params.id, ()=> {
    getCategory()
}, { immediate: true })
onMounted(() => {
    getCategory()
    getBannerData()
})
</script>

<style scoped lang="scss">
.category {
    width: 100%;
    background-color: #fff;
    .bread-container {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 100px;
        background-color: #d9d6d6;
    }
    .banner {
        background-color: #d9d6d6;
        padding: 0 100px 30px;
        width: 100%;
        height: 100%;
        z-index: 98;
        img {
            width: 100%;
            height: 500px;
        }
    }
    .sub-list {
        width: 100%;
        height: 100%;
        padding: 0 100px;
        h3 {
            font-size: 28px;
            color: #666;
            font-weight: normal;
            text-align: center;
            line-height: 70px;
        }
        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;
            li {
                width: 168px;
                height: 160px;
                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;
                    img {
                        width: 100px;
                        height: 100px;
                    }
                    p {
                        line-height: 40px;
                    }
                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }
    .ref-goods {
        padding: 0 100px;
        background-color: #fff;
        .ref-goods-item {
            display: flex;
            flex-direction: column;
            background-color: #d9d6d6;
            gap: 20px;
            .head {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
            .body {
                display: flex;
                justify-content: space-around;
                padding: 0 40px 30px;
            }
        }

    }
}

</style>
