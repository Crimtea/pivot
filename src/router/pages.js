export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/pages/home/index.vue'),
        meta: {
            title: '首页',
            for: '首页',
            subnum: 1,
        }
    },
    {
        path: '/component',
        name: 'component',
        component: () => import('../views/pages/component/index.vue'),
        meta: {
            title: '组件',
            for: '组件',
            subnum: 1,
        }
    },
    // demo
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../views/pages/demo/index.vue'),
        meta: {
            title: '签到日历',
            for: 'Demo',
            subnum: 1,
        }
    },
    {
        path: '/log',
        name: 'log',
        component: () => import('../views/pages/log/index.vue'),
        meta: {
            title: '日志',
        }
    },



]
