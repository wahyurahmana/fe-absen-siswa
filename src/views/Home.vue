<script>
  import Navbar from '../components/Navbar.vue';
  import ControlSidebar from '../components/ControlSidebar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    components : {
      Navbar,
      ControlSidebar,
      Footer
    }
  }
</script>

<template>
    <Navbar />
    <router-view></router-view>
    <ControlSidebar />
    <Footer />
</template>

<style scoped>
</style>