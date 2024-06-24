import { defineStore } from "pinia";
import { ref } from "vue"

export const useCartStore = defineStore("cart", () => {
    let cartList = ref();
    // 添加购物车操作
    const addCart = () => {
    }

    return { cartList, addCart }
}, { persist: true })
