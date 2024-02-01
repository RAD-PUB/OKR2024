<template>
  <!-- Header -->
  <Header />

  <!-- Gnb -->
  <Gnb />

  <!-- router -->
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Gnb from '@/layouts/Gnb.vue'
export default {
  name: 'App',
  components: {
    Header,
    Gnb,
  },

  mounted() {
    let app = document.querySelector('#app');
    window.onresize = function() {
      let ww = window.innerWidth;
      if(ww < 1200) {
        app.classList.add('off')
      } else {
        app.classList.remove('off')
      }
    }

  }
}
</script>

<style lang="scss">
@import "assets/scss/variables.scss";
</style>
