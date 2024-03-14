import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const HomeView = () => import('@/views/HomeView.vue')
const TestView = () => import('@/views/TestView.vue')
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/test',
    },
    {
        path: '/test',
        name: 'test',
        component: TestView,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
