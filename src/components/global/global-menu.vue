<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="true">
                    <li><i class="iconfont icon-user"></i>周杰伦</li>
                    <li>
                        <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                退出登录
                            </template>
                        </el-popconfirm>
                    </li>
                    <li>我的订单</li>
                    <li>会员中心</li>
                </template>
                <template v-else>
                    <li>请先登录</li>
                    <li>帮助中心</li>
                    <li>关于我们</li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            padding: 0 15px;
            color: #cdcdcd;
            line-height: 1;
            display: inline-block;
            border-left: 2px solid #666;
            cursor: pointer;
            i {
                font-size: 14px;
                margin-right: 2px;
            }
            &:hover {
                color: $xtxColor;
            }
            &:first-child {
                border-left: none;
            }
        }
    }
}
</style>