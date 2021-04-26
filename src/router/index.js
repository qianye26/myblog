import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index')
const index_content = () => import('@/views/index_content')
const catelist = () => import('@/views/catelist')
const about = () => import('@/views/about')
const detail = () => import('@/views/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '/',
        component: index_content
      },
      {
        path: '/cate/:cateid',
        component: catelist
      },
      {
        path: '/about',
        component: about
      },
      {
        path: '/detail/:id',
        component: detail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
