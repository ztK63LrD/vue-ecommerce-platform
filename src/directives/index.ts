// 存放全局插件
// 导入vueuse工具获取视口区域位置函数
import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
    install(app: any) {
        // 懒加载指令逻辑
        app.directive('img-lazy', {
            // el: 指令绑定的哪个元素 img
            // binding: bingding.value 指令等于号后面绑定的表达式的值 图片url
            mounted(el: any, binding: any) {
                // 该函数对于元素的监听是一直存在的，需要我们手动停止监听，这里调用该函数存在的stop方法停止监听
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        // 进入视口区域
                        el.src = binding.value
                        stop()
                    }
                })
            }
        })
    }
}