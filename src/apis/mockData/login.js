export default {
    getMenu: () => {
        return {
            code: 200,
            data: {
                menu: [
                    {
                        path: '/home',
                        name: 'home',
                        label: '首页',
                        icon: 's-home',
                        url: 'home/index'
                    },
                    {
                        path: '/mall',
                        name: 'mall',
                        label: '商品管理',
                        icon: 'video-play',
                        url: 'mall/index'
                    },
                    {
                        path: '/user',
                        name: 'user',
                        label: '用户管理',
                        icon: 'user',
                        url: 'User/index'
                    },
                    {
                        label: '其他',
                        icon: 'location',
                        children: [
                            {
                                path: '/page1',
                                name: 'page1',
                                label: '页面1',
                                icon: 'setting',
                                url: 'other/pageOne.vue'
                            },
                            {
                                path: '/page2',
                                name: 'page2',
                                label: '页面2',
                                icon: 'setting',
                                url: 'other/pageTwo.vue'
                            }
                        ]
                    }
                ],
            }
        }
    }


}