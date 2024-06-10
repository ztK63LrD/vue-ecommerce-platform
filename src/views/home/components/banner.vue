<template>
    <div class="banner">
        <el-carousel height="500px" autoplay :interval='3000'>
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="图片">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 导入接口函数
import { reqGetBannerData } from '@/api/home'
// 导入接口数据类型
import type { BannerData, bannerResult } from '@/api/home/type'

// 轮播图数据
let bannerList = ref<bannerResult[]>()

// 获取轮播图数据
const getBannerData = async () => {
    let res: BannerData = await reqGetBannerData()
    bannerList.value = res.result
}

onMounted(() => {
    getBannerData()
})
</script>

<style scoped lang="scss">
.banner {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0 100px;
    left: 0;
    top: 0;
    z-index: 98;
    img {
        width: 100%;
        height: 500px;
    }
}
</style>
