/**
 * 基础路由
 * @type { *[] }
 */
const LoginComponent = () => import('@/views/login/index')
const IdentityComponent = () => import('@/views/infoAuth/identity')

export const constantRouterMap = [
  {
    path: '/',
    component: LoginComponent,
    redirect: '/index',
    meta: {
      title: '登录'
      // keepAlive: false
    },
    children: [
      {
        path: '/index',
        name: 'login',
        meta: {
          title: '登录'
          // keepAlive: false
        }
      }
    ]
  }, {
    path: '/identity',
    component: IdentityComponent
  }
]
