<template>
    <div class="panel">
        <!-- 主标题和副标题 -->
        <div class="head">
            <h3>{{ props.title }}<small>{{ props.subTitle }}</small></h3>
        </div>
        <!-- 主体内容区域 -->
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String, // 主标题
    subTitle: String // 副标题
})
</script>

<style scoped lang="scss">
.panel {
    width: 100%;
    height: 100%;
    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;
            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>
