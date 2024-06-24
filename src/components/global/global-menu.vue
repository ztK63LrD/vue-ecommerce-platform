<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!-- 区分登录状态和非登录状态 -->
                <template v-if="userStore.userInfo?.token">
                    <li><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</li>
                    <li>
                        <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                退出登录
                            </template>
                        </el-popconfirm>
                    </li>
                    <li>我的订单</li>
                    <li>会员中心</li>
                </template>
                <template v-else>
                    <li @click="$router.push('/login')">请先登录</li>
                    <li>帮助中心</li>
                    <li>关于我们</li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

// 退出登录
const confirm = () => {
    // 清除用户信息
    userStore.clearUserInfo()
    // 跳转登录页
    router.push('/login');
}
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