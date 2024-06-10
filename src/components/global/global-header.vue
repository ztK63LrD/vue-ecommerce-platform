<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">首页</RouterLink>
            </h1>
            <ul class="app-header-nav">
                <li class="home" v-for="(item, index) in homeStore.homeData" :key="index">
                    <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-sousuo1"></i>
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </header>
    <div class="sticky" :class="{ show: y > 78 }">
        <div class="container">
            <RouterLink class="logo" to="/" />
            <!-- 导航区域 -->
            <ul class="app-header-nav1 ">
                <li class="home" v-for="(item, index) in homeStore.homeData" :key="index">
                    <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                </li>
            </ul>

            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// 导入仓库
import { useHomeStore } from '@/store/modules/home'

import { useScroll } from '@vueuse/core';
const { y } = useScroll(window)
const homeStore = useHomeStore()

onMounted(() => {
    // 调用仓库函数
    homeStore.getHomeCategoryData()
})
</script>

<style scoped lang='scss'>
.app-header {
    background: #fff;

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 132px;
            width: 100%;
            text-indent: -9999px;
            background: url('@/assets/images/logo.png') no-repeat center 18px / 70% 70%;
        }
    }

    .app-header-nav {
        width: 820px;
        display: flex;
        padding-left: 40px;
        position: relative;
        z-index: 998;

        li {
            margin-right: 40px;
            width: 38px;
            text-align: center;

            a {
                font-size: 16px;
                line-height: 30px;
                color: #666;
                height: 32px;
                text-decoration: none;

                &:hover {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }

            .active {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }
    }

    .search {
        width: 170px;
        height: 32px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;

        .iconfont {
            position: absolute;
            top: 3px;
            left: -18px;
        }

        input {
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }

    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: $helpColor;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}

// 吸顶导航
.sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    // 此处为关键样式!!!
    // 状态一：往上平移自身高度 + 完全透明
    transform: translateY(-100%);
    opacity: 0;

    // 状态二：移除平移 + 完全不透明
    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;
        height: 80px;
        background: url("@/assets/images/logo.png") no-repeat right 2px;
        background-size: 60% 100%;
    }

    .right {
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid $xtxColor;

        a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1;
            text-decoration: none;
            color: #666;

            &:hover {
                color: $xtxColor;
            }
        }
    }
}

.app-header-nav1 {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;
            text-decoration: none;
            color: #666;

            &:hover {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }

        .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
        }
    }
}
</style>