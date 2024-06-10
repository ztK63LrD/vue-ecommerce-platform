<template>
    <div class="goods-item">
        <RouterLink to="/" class="goods-item">
            <img v-img-lazy="props.goods?.picture" :alt="props.goods?.name" />
            <p class="name ellipsis">{{ props.goods?.name }}</p>
            <p class="desc ellipsis">{{ props.goods?.desc }}</p>
            <p class="price">&yen;{{ props.goods?.price }}</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
// 导入接口数据类型
import type { goodsData } from '@/api/home/type'
import { PropType } from 'vue';
const props = defineProps({
    goods: Object as PropType<goodsData>
})
</script>

<style scoped lang="scss">
.goods-item {
    width: 100%;
    height: 100%;

    .goods-item {
        display: block;
        width: 100%;
        padding: 20px 30px;
        text-align: center;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
            color: $xtxColor;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .ellipsis {
            white-space: nowrap;
            /* 禁止文本换行 */
            overflow: hidden;
            /* 隐藏超出部分的文本 */
            text-overflow: ellipsis;
            /* 使用省略号代替超出部分的文本 */
            max-width: 20ch;
            /* 设置最大宽度为8个字符长度 */
        }


        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>
