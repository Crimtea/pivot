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
            title: '演示',
            for: 'Demo',
            subnum: 2,
        }
    },
    {
        path: '/sign-in-record',
        name: 'sign-in-record',
        component: () => import('../views/pages/demo/signInRecord.vue'),
        meta: {
            title: '签到日历',
        }
    },

    // test
    {
        path: '/gloveCompartment',
        name: 'gloveCompartment',
        component: () => import('../views/pages/gloveCompartment/index.vue'),
        meta: {
            title: '杂物箱',
            for: '杂物箱',
            subnum: 3,
        }
    },
    {
        path: '/file-tree',
        name: 'file-tree',
        component: () => import('../views/pages/gloveCompartment/fileTree.vue'),
        meta: {
            title: '文件树',
        }
    },
    {
        path: '/Sign-calendar',
        name: 'Sign-calendar',
        component: () => import('../views/pages/gloveCompartment/SignCalendar.vue'),
        meta: {
            title: '签到日历',
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
