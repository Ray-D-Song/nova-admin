export const staticRoutes: AppRoute.RowRoute[] = [
  {
    'name': 'dashboard',
    'path': '/dashboard',
    'meta.title': '仪表盘',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:analysis',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 1,
    'pid': null,
  },
  {
    'name': 'workbench',
    'path': '/dashboard/workbench',
    'meta.title': '工作台',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:alarm',
    'meta.pinTab': true,
    'meta.menuType': 'page',
    'componentPath': '/dashboard/workbench/index.vue',
    'id': 2,
    'pid': 1,
  },
  {
    'name': 'monitor',
    'path': '/dashboard/monitor',
    'meta.title': '监控页',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:anchor',
    'meta.menuType': 'page',
    'componentPath': '/dashboard/monitor/index.vue',
    'id': 3,
    'pid': 1,
  },
  {
    'name': 'test',
    'path': '/test',
    'meta.title': '多级菜单演示',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 4,
    'pid': null,
  },
  {
    'name': 'test2',
    'path': '/test/test2',
    'meta.title': '多级菜单子页',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list',
    'meta.menuType': 'page',
    'componentPath': '/test/test2/index.vue',
    'id': 6,
    'pid': 4,
  },
  {
    'name': 'test2Detail',
    'path': '/test/test2/detail',
    'meta.title': '多级菜单的详情页',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list',
    'meta.hide': true,
    'meta.activeMenu': '/test/test2',
    'meta.menuType': 'page',
    'componentPath': '/test/test2/detail/index.vue',
    'id': 7,
    'pid': 4,
  },
  {
    'name': 'test3',
    'path': '/test/test3',
    'meta.title': '多级菜单',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 8,
    'pid': 4,
  },
  {
    'name': 'test4',
    'path': '/test/test3/test4',
    'meta.title': '多级菜单3-1',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list',
    'componentPath': '/test/test3/test4/index.vue',
    'id': 9,
    'pid': 8,
  },
  {
    'name': 'list',
    'path': '/list',
    'meta.title': '列表页',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list-two',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 10,
    'pid': null,
  },
  {
    'name': 'commonList',
    'path': '/list/commonList',
    'meta.title': '常用列表',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:list-view',
    'componentPath': '/list/commonList/index.vue',
    'id': 11,
    'pid': 10,
  },
  {
    'name': 'cardList',
    'path': '/list/cardList',
    'meta.title': '卡片列表',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:view-grid-list',
    'componentPath': '/list/cardList/index.vue',
    'id': 12,
    'pid': 10,
  },
  {
    'name': 'demo',
    'path': '/demo',
    'meta.title': '功能示例',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:application-one',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 13,
    'pid': null,
  },
  {
    'name': 'fetch',
    'path': '/demo/fetch',
    'meta.title': '请求示例',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:international',
    'componentPath': '/demo/fetch/index.vue',
    'id': 5,
    'pid': 13,
  },
  {
    'name': 'echarts',
    'path': '/demo/echarts',
    'meta.title': 'ECharts',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:chart-proportion',
    'componentPath': '/demo/echarts/index.vue',
    'id': 15,
    'pid': 13,
  },
  {
    'name': 'map',
    'path': '/demo/map',
    'meta.title': '地图',
    'meta.requiresAuth': true,
    'meta.icon': 'carbon:map',
    'meta.keepAlive': true,
    'componentPath': '/demo/map/index.vue',
    'id': 17,
    'pid': 13,
  },
  {
    'name': 'editor',
    'path': '/demo/editor',
    'meta.title': '编辑器',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:editor',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 18,
    'pid': 13,
  },
  {
    'name': 'editorMd',
    'path': '/demo/editor/md',
    'meta.title': 'MarkDown',
    'meta.requiresAuth': true,
    'meta.icon': 'ri:markdown-line',
    'componentPath': '/demo/editor/md/index.vue',
    'id': 19,
    'pid': 18,
  },
  {
    'name': 'editorRich',
    'path': '/demo/editor/rich',
    'meta.title': '富文本',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:edit-one',
    'componentPath': '/demo/editor/rich/index.vue',
    'id': 20,
    'pid': 18,
  },
  {
    'name': 'clipboard',
    'path': '/demo/clipboard',
    'meta.title': '剪贴板',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:clipboard',
    'componentPath': '/demo/clipboard/index.vue',
    'id': 21,
    'pid': 13,
  },
  {
    'name': 'icons',
    'path': '/demo/icons',
    'meta.title': '图标',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:winking-face-with-open-eyes',
    'componentPath': '/demo/icons/index.vue',
    'id': 22,
    'pid': 13,
  },
  {
    'name': 'QRCode',
    'path': '/demo/QRCode',
    'meta.title': '二维码',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:two-dimensional-code',
    'componentPath': '/demo/QRCode/index.vue',
    'id': 23,
    'pid': 13,
  },
  {
    'name': 'docments',
    'path': '/docments',
    'meta.title': '外链文档',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:file-doc',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 24,
    'pid': null,
  },
  {
    'name': 'docmentsVue',
    'path': '/docments/vue',
    'meta.title': 'Vue',
    'meta.requiresAuth': true,
    'meta.icon': 'logos:vue',
    'componentPath': '/docments/vue/index.vue',
    'id': 25,
    'pid': 24,
  },
  {
    'name': 'docmentsVite',
    'path': '/docments/vite',
    'meta.title': 'Vite',
    'meta.requiresAuth': true,
    'meta.icon': 'logos:vitejs',
    'componentPath': '/docments/vite/index.vue',
    'id': 26,
    'pid': 24,
  },
  {
    'name': 'docmentsVueuse',
    'path': '/docments/vueuse',
    'meta.title': 'VueUse（外链）',
    'meta.requiresAuth': true,
    'meta.icon': 'logos:vueuse',
    'meta.herf': 'https://vueuse.org/guide/',
    'componentPath': '/docments/vueuse/index.vue',
    'id': 27,
    'pid': 24,
  },
  {
    'name': 'permission',
    'path': '/permission',
    'meta.title': '权限',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:people-safe',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 28,
    'pid': null,
  },
  {
    'name': 'permissionDemo',
    'path': '/permission/permission',
    'meta.title': '权限示例',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:right-user',
    'componentPath': '/permission/permission/index.vue',
    'id': 29,
    'pid': 28,
  },
  {
    'name': 'justSuper',
    'path': '/permission/justSuper',
    'meta.title': 'super可见',
    'meta.requiresAuth': true,
    'meta.roles': [
      'super',
    ],
    'meta.icon': 'icon-park-outline:wrong-user',
    'componentPath': '/permission/justSuper/index.vue',
    'id': 30,
    'pid': 28,
  },
  {
    'name': 'error',
    'path': '/error',
    'meta.title': '异常页',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:error-computer',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 31,
    'pid': null,
  },
  {
    'name': 'demo403',
    'path': '/error/403',
    'meta.title': '403',
    'meta.requiresAuth': true,
    'meta.icon': 'carbon:error',
    'meta.order': 3,
    'componentPath': '/error/403/index.vue',
    'id': 32,
    'pid': 31,
  },
  {
    'name': 'demo404',
    'path': '/error/404',
    'meta.title': '404',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:error',
    'meta.order': 2,
    'componentPath': '/error/404/index.vue',
    'id': 33,
    'pid': 31,
  },
  {
    'name': 'demo500',
    'path': '/error/500',
    'meta.title': '500',
    'meta.requiresAuth': true,
    'meta.icon': 'carbon:data-error',
    'meta.order': 1,
    'componentPath': '/error/500/index.vue',
    'id': 34,
    'pid': 31,
  },
  {
    'name': 'setting',
    'path': '/setting',
    'meta.title': '系统设置',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:setting',
    'meta.menuType': 'dir',
    'componentPath': null,
    'id': 35,
    'pid': null,
  },
  {
    'name': 'accountSetting',
    'path': '/setting/account',
    'meta.title': '用户设置',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:every-user',
    'componentPath': '/setting/account/index.vue',
    'id': 36,
    'pid': 35,
  },
  {
    'name': 'dictionarySetting',
    'path': '/setting/dictionary',
    'meta.title': '字典设置',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:book-one',
    'componentPath': '/setting/dictionary/index.vue',
    'id': 37,
    'pid': 35,
  },
  {
    'name': 'menuSetting',
    'path': '/setting/menu',
    'meta.title': '菜单设置',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:application-menu',
    'componentPath': '/setting/menu/index.vue',
    'id': 38,
    'pid': 35,
  },
  {
    'name': 'userCenter',
    'path': '/userCenter',
    'meta.title': '个人中心',
    'meta.requiresAuth': true,
    'meta.icon': 'carbon:user-avatar-filled-alt',
    'componentPath': '/userCenter/index.vue',
    'id': 39,
    'pid': null,
  },
  {
    'name': 'about',
    'path': '/about',
    'meta.title': '关于',
    'meta.requiresAuth': true,
    'meta.icon': 'icon-park-outline:info',
    'componentPath': '/about/index.vue',
    'id': 40,
    'pid': null,
  },
]
