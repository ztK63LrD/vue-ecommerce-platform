<template>
    <div class="home">
        <!-- 顶部分类与banner页面 -->
        <div class="topCategoryBanner">
            <CateGory></CateGory>
            <Banner></Banner>
        </div>
        <New></New>
        <Hot></Hot>
        <Product></Product>
    </div>
</template>

<script setup lang="ts">
// 导入组件
import CateGory from './components/category.vue'
import Banner from './components/banner.vue'
import New from './components/new.vue'
import Hot from './components/hot.vue';
import Product from './components/product.vue';

</script>

<style scoped lang="scss">
.home {
    width: 100%;
    color: $helpColor;
    box-sizing: border-box;
    .topCategoryBanner {
        width: 100%;
        padding: 0 100px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        position: relative;
    }
}
</style>
