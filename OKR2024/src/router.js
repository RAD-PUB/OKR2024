import { createWebHistory, createRouter } from "vue-router";

// 연결할 각 컴포넌트 import
import Content from '@/layouts/Content.vue';
import Swiper from '@/components/SwiperComp.vue'
import Pagination from '@/components/Pagination.vue'
import Form from '@/components/Form.vue'

let routes = [
    {
        path: "/",
        component: Content,
    },
    {
        path: "/swiper",
        component: Swiper
    },
    {
        path: "/pagination",
        component: Pagination
    },
    {
        path: "/form",
        component: Form
    }
]

let router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;