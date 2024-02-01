<template>
    <header class="pub_header">
        <button type="button" @click="gnbClose" class="pub_header_gnbClose">
            <!-- <font-awesome-icon icon="fa-solid fa-xmark" /> -->
            <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
        </button>
        <h1>VUE 컴포넌트 가이드</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        gnbClose: function() {
            let app = document.querySelector('#app');
            app.classList.toggle('off');
        }
    }
}
</script>