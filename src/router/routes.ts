// 对外暴露路由(常量路由)
export const constantRoute = [
    {
      path: '/login',
      name: 'login', // 命名路由
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录页面',
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
      },
    },
    { 
      path: '/category/:id',
      component: () => import('@/views/home/category/index.vue'),
      meta: {
        title: '分类页',
      },
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue'),
      meta: {
        title: '404界面',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'any',
      redirect: '/404',
    },
  ]