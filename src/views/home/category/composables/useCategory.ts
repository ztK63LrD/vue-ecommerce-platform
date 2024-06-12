import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
// 导入接口函数
import { reqGetCategory } from "@/api/category";
// 导入接口数据类型
import type { CategoryListResult, CategoryList } from '@/api/category/type'

export function useCategory() {
  // 获取路由实例对象
  const route = useRoute();
  // 分类数据
  let categoryData = ref<CategoryList>();

  // 获取分类数据
  const getCategory = async () => {
    let res: CategoryListResult = await reqGetCategory(route.params.id as string)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
  watch(() => route.params.id, ()=> getCategory())
  // 将数据或方法return出去
  return {
    categoryData
  }
}