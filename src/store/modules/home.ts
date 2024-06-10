import { defineStore } from "pinia";
import { ref } from "vue"
import { reqGetCategoryData } from '@/api/home';
// 导入接口类型
import type { CategoryData, resultData } from '@/api/home/type'

export const useHomeStore = defineStore("home", () => {
    let homeData = ref<resultData[]>();
    // 首页数据
    const getHomeCategoryData = async () => {
        const res: CategoryData = await reqGetCategoryData()
        homeData.value = res.result;
    }

    return { homeData, getHomeCategoryData }
})
