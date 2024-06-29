import { defineStore } from "pinia";
import { computed, ref } from "vue"
import { useUserStore } from "./user";
import { reqCartData, reqCartListData, reqDeleteCartData } from "@/api/cart"

export const useCartStore = defineStore("cart", () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // 总商品信息
    let cartList = ref<any>([]);
    // 总的数量
    const allCount = computed(()=> cartList.value.reduce((a: any, c: any) => a + c.count, 0))
    // 总价
    const allPrice = computed(()=> cartList.value.reduce((a: any, c: any) => a + (c.count * c.price), 0))
    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter((item: any) => item.selected).reduce((a: any, c: any) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter((item: any) => item.selected).reduce((a: any, c: any) => a + c.count * c.price, 0))
    // 是否全选计算属性
    const isAll = computed(() => cartList.value.every((item: any) => item.selected))
    
    // 获取最新购物车列表数据
    const getCartList = async () => {
        const res = await reqCartListData()
        cartList.value = res.result
    }
    
    // 添加购物车操作
    const addCart = async (goods: any) => {
        if (isLogin) { // 登录之后加入购物车的逻辑
            const { skuId, count } = goods
            await reqCartData({ skuId, count }) 
            getCartList()
        } else {
            const item = cartList.value.find((item: any) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count = item.count + goods.count
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
    }
    // 删除购物车
    const delCart = async (skuId: any) => {
        if (isLogin) {
            await reqDeleteCartData([ skuId ])
            getCartList()
        } else {
            const idx = cartList.value.findIndex((item: any) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
    }
    // 清除购物车
    const clearCart = async () => {
        cartList.value = []
    }

    // 单选功能
    const singleCheck = (skuId: any, selected: any) => {
        const item = cartList.value.find((item: any) => item.skuId === skuId)
        item.selected = selected
    }

    // 全选功能action
    const allCheck = (selected: any) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach((item: any) => item.selected = selected)
    }
    
    return { cartList, allCount, allPrice, addCart, delCart, singleCheck, allCheck, isAll, selectedCount, selectedPrice, clearCart, getCartList }
}, { persist: true })
