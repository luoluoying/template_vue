/**
 * 基础路由
 * @type { *[] }
 */
const LoginComponent = () => import('@/views/login/index')

export const constantRouterMap = [
  {
    path: '/',
    component: LoginComponent,
    redirect: '/index',
    meta: {
      // title: '登录',
      // keepAlive: false
    },
    children: [
      {
        path: '/index',
        name: 'login'
      }
    ]
  }
]
