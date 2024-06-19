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
                    <RouterLink :to="`/category/sub/${item.id}`">
                        <img :src="item.picture" />
                        <p>{{ item.name }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="ref-goods" v-if="categoryData" v-for="item in categoryData.children" :key="item.id">
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
import { watch } from "vue";
import { useCategory } from "./composables/useCategory"
import { useBanner } from "./composables/useBanner"

const { categoryData } = useCategory()
const { bannerList } = useBanner()

watch(categoryData, () => {
    // console.log(categoryData.value)
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
        padding: 20px 100px;
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
            justify-content: space-around;
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
                font-weight: 700;
                font-size: 25px;
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
