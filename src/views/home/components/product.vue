<template>
    <div class="product">
        <Panel :title="item.name" v-for="item in productData" :key="item.id">
            <div class="box">
                <RouterLink class="cover" to="/">
                    <img v-img-lazy="item.picture" :alt="item.name" />
                    <strong class="label">
                        <span>{{ item.name }}馆</span>
                        <span>{{ item.saleInfo }}</span>
                    </strong>
                </RouterLink>
                <ul class="goods-list">
                    <li v-for="goods in item.goods" :key="goods.id">
                        <goods-item :goods="goods"></goods-item>
                    </li>
                </ul>
            </div>
        </Panel>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 导入组件
import Panel from './panel.vue'
// 导入接口函数
import { reqGetProductListData } from '@/api/home'
// 导入接口数据类型
import type { ProductData, productResult } from '@/api/home/type'

// 新鲜好物数据
let productData = ref<productResult[]>()

// 获取新鲜好物数据
const getNewData = async () => {
    let res: ProductData = await reqGetProductListData()
    productData.value = res.result
}
onMounted(() => {
    getNewData()
})
</script>

<style scoped lang="scss">
.product {
    width: 100%;
    height: 100%;
    padding: 0 100px;

    .box {
        width: 100%;
        display: flex;

        .cover {
            width: 250px;
            height: 610px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .label {
                width: 188px;
                height: 66px;
                display: flex;
                font-size: 18px;
                color: #fff;
                line-height: 66px;
                font-weight: 500;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate3d(0, -50%, 0);

                span {
                    text-align: center;

                    &:first-child {
                        width: 76px;
                        background: rgba(0, 0, 0, 0.9);
                    }

                    &:last-child {
                        flex: 1;
                        background: rgba(0, 0, 0, 0.7);
                    }
                }
            }
        }

        .goods-list {
            width: calc(100vw - 450px);
            display: flex;
            flex-wrap: wrap;
            gap: 10px 10px;
            margin-left: 10px;

            li {
                width: 24%;
                height: 300px;
            }
        }


    }
}
</style>
