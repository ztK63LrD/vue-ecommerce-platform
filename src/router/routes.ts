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
      path: '/category/sub/:id',
      component: () => import('@/views/home/subCategory/index.vue'),
      meta: {
        title: '二级分类页面',
      },
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/home/details/index.vue'),
      meta: {
        title: '详情页',
      },
    },
    {
      path: '/cartlist',
      component: () => import('@/views/home/cartList/index.vue'),
      meta: {
        title: '购物车页面',
      },
    },
    {
      path: '/checkout',
      component: () => import('@/views/home/checkout/index.vue'),
      meta: {
        title: '结算页面',
      },
    },
    {
      path: '/pay',
      component: () => import('@/views/home/pay/index.vue'),
      meta: {
        title: '支付页面',
      },
    },
    {
      path: '/paycallback',
      component: () => import('@/views/home/pay/paycallback.vue'),
      meta: {
        title: '支付回调页面',
      },
    },
    {
      path: '/member',
      component: () => import('@/views/home/member/index.vue'),
      meta: {
        title: '会员中心',
      },
      children: [
        {
          path: 'user',
          component: () => import('@/views/home/member/memberInfo/index.vue'),
          meta: {
            title: '用户信息',
          },
        },
        {
          path: 'order',
          component: () => import('@/views/home/member/order/index.vue'),
          meta: {
            title: '订单列表',
          },
        }
      ]
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