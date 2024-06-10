<template>
    <div class="hot">
        <Panel :title="'新鲜好物'" :sub-title="'新鲜出炉 品质靠谱'">
            <ul class="goods-list">
                <li v-for="item in hotData" :key="item.id">
                    <RouterLink to="/">
                        <img :src="item.picture" :alt="item.alt">
                        <p class="name">{{ item.title }}</p>
                        <p class="desc">{{ item.alt }}</p>
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
import { reqGetHotData } from '@/api/home'
// 导入接口数据类型
import type { RecommendData, recommendResult } from '@/api/home/type'

// 人气推荐数据
let hotData = ref<recommendResult[]>()

// 获取新鲜好物数据
const getNewData = async () => {
    let res: RecommendData = await reqGetHotData()
    hotData.value = res.result
}

onMounted(() => {
    getNewData()
})
</script>

<style scoped lang="scss">
.hot {
    width: 100%;
    height: 100%;
    padding: 0 100px;

    .goods-list {
        display: flex;
        justify-content: space-between;
        height: 406px;

        li {
            width: 24%;
            height: 400px;
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
                color: $xtxColor;
            }

            .desc {
                color: #999;
                font-size: 16px;
            }
        }
    }
}
</style>
