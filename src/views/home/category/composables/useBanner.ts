import { ref, onMounted } from "vue";
import { reqGetBannerData } from '@/api/home'
import type { BannerData, bannerResult } from '@/api/home/type'

export function useBanner() {
  // 轮播图数据
  let bannerList = ref<bannerResult[]>()
  // 获取轮播图数据
  const getBannerData = async () => {
    let res: BannerData = await reqGetBannerData({ distributionSite: '2' })
    bannerList.value = res.result
  }
  onMounted(() => getBannerData())
  return {
    bannerList
  }
}