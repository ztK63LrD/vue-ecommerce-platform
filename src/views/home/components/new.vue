<template>
    <div class="new">
        <Panel :title="'新鲜好物'" :sub-title="'新鲜出炉 品质靠谱'">
            <ul class="goods-list">
                <li v-for="item in newData" :key="item.id">
                    <RouterLink to="/">
                        <img v-img-lazy="item.picture" alt="" />
                        <p class="name">{{ item.name }}</p>
                        <p class="price">&yen;{{ item.price }}</p>
                    </RouterLink>
                </li>
            </ul>
        </Panel>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 导入组件
import Panel from './panel.vue'
// 导入接口函数
import { reqGetNewData } from '@/api/home'
// 导入接口数据类型
import type { NewData, newResult } from '@/api/home/type'

// 新鲜好物数据
let newData = ref<newResult[]>()

// 获取新鲜好物数据
const getNewData = async () => {
    let res: NewData = await reqGetNewData()
    newData.value = res.result
}

onMounted(() => {
    getNewData()
})
</script>

<style scoped lang="scss">
.new {
    width: 100%;
    height: 100%;
    padding: 0 100px;
    .goods-list {
        display: flex;
        justify-content: space-between;
        height: 406px;
        li {
            width: 24%;
            height: 390px;
            background: #f0f9f4;
            transition: all .5s;

            &:hover {
                transform: translate3d(0, -3px, 0);
                box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
            }

            img {
                width: 100%;
                height: 306px;
            }

            p {
                font-size: 22px;
                padding-top: 12px;
                text-align: center;
                text-overflow: ellipsis;
                color: $xtxColor;
                overflow: hidden;
                white-space: nowrap;
            }

            .price {
                color: $priceColor;
            }
        }
    }
}
</style>
