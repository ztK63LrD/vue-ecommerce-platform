import { defineStore } from "pinia";
import { ref } from "vue"
import { reqLogin } from '@/api/login';
import { useCartStore } from "./cart";
import { reqMergeCartData } from '@/api/cart';

export const useUserStore = defineStore("user", () => {
    const cartStore = useCartStore();
    let userInfo = ref();
    // 用户数据
    const getUserInfo = async (data: any) => {
        let res = await reqLogin(data)
        userInfo.value = res.result;
        // 合并购物车数据
        await reqMergeCartData(cartStore.cartList.map((item: any) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }));
        cartStore.getCartList();
    }
    // 清除用户数据
    const clearUserInfo = () => {
        userInfo.value = {};
        // 清除购物车中的action
        cartStore.clearCart();
    }   

    return { userInfo, getUserInfo, clearUserInfo }
}, { persist: true })
