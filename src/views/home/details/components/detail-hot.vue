<!-- 热榜数据内容 -->
<template>
    <div class="detail-hot">
        <h3>{{ title }}</h3>
        <!-- 商品区块 -->
        <template v-if="hotList">
            <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
                <img :src="item.picture" alt="图片" />
                <p class="name ellipsis">{{ item.name }}</p>
                <p class="desc ellipsis">{{ item.desc }}</p>
                <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import  {reqGetHot} from '@/api/details' 
import { useRoute } from 'vue-router';

const props = defineProps({
    hotType: Number as any
})

const TYPEMAP: any = {
    1: '24小时热榜',
    2: '周热榜'
}

let hotList = ref<any>()
let route = useRoute()

const getDetailHotData = async () => {
    let res = await reqGetHot({ id: route.params.id, type: props.hotType })
    hotList.value = res.result
}

// 计算title
const title = computed(() => TYPEMAP[props.hotType])

onMounted(() => {
    getDetailHotData()
})
</script>

<style scoped lang="scss">
.detail-hot {
    width: 100%;

    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>
