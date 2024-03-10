import { createWebHistory, createRouter } from "vue-router";

// 연결할 각 컴포넌트 import
import Content from '@/layouts/Content.vue';
import SwiperPage from '@/pages/SwiperPage.vue'
import BtnPage from '@/pages/BtnPage.vue'
import PaginationPage from '@/pages/PaginationPage.vue'
import FormPage from '@/pages/FormPage.vue'

let routes = [
    {
        path: "/",
        component: Content,
    },
    {
        path: "/swiper",
        component: SwiperPage
    },
    {
        path : "/btn",
        component: BtnPage
    },
    {
        path: "/pagination",
        component: PaginationPage
    },
    {
        path: "/form",
        component: FormPage
    },
]

let router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;