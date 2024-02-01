<template>
    <nav class="pub_nav">
        <ul>
            <li v-for="(el, idx) in gnbList" :key="idx">
                <a :href=el.path>{{ el.gnb }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Gnb',
    data: () => ({
        gnbList: [
            {
                path: "/",
                gnb: "기본정책"
            },
            {
                path: "/swiper",
                gnb: "Swiper"
            },
            {
                path: "/form",
                gnb: "Form"
            },
            {
                path: "/modalpop",
                gnb: "Modal Pop"
            },
            {
                path: "/loadingbar",
                gnb: "Loading Bar"
            },
            {
                path: "/tab",
                gnb: "Tab"
            },
            {
                path: "/treemenu",
                gnb: "Tree Menu"
            },
            {
                path: "/pagination",
                gnb: "Pagination"
            },
        ]
    })
}
</script>