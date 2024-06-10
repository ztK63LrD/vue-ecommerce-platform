<template>
    <div class="category">
        <ul class="menu">
            <li v-for="(item, index) in homeStore.homeData" :key="index" style="padding-left: 35px">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink v-for="(item1, index1) in item.children.slice(0, 2)" :key="index1" to="/">{{ item1.name }}</RouterLink>
                <!-- 弹层layer位置 -->
                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="(item2, index2) in item.goods" :key="index2">
                            <RouterLink to="/">
                                <img :src="item2.picture" alt="图片" />
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ item2.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ item2.desc }}</p>
                                    <p class="price"><i>¥</i>{{ item2.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// 导入仓库
import { useHomeStore } from '@/store/modules/home'

const homeStore = useHomeStore()

</script>

<style scoped lang="scss">
.category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;

    .menu {
        li {
            height: 55px;
            line-height: 55px;
            &:hover {
                background: $xtxColor;
                cursor: pointer;
            }
            a {
                margin-right: 4px;
                color: #fff;
                text-decoration: none;
                font-family: 'Microsoft YaHei';
                &:first-child {
                    font-size: 16px;
                }
            }
            .layer {
                width: calc(100vw - 463px);
                height: 500px;
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;
                h4 {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 80px;
                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px 15px;
                    li {
                        width: 32%;
                        height: 120px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;
                        a {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            padding: 0 10px;
                            img {
                                width: 85px;
                                height: 85px;
                            }
                            .info {
                                padding: 0 10px;
                                line-height: 24px;
                                .name {
                                    font-size: 15px;
                                    color: #666;
                                }
                                .desc {
                                    font-size: 12px;
                                    color: #999;
                                }
                                .price {
                                    font-size: 20px;
                                    color: $priceColor;
                                }
                            }
                        }
                        &:hover {
                            background: rgb(216, 219, 245, .5);
                            cursor: pointer;
                        }
                    }
                }
            }
            // 关键样式  hover状态下的layer盒子变成block
            &:hover {
                .layer {
                    display: block;
                }
            }
        }
    }
}
</style>
