<script>
  import Navbar from '../components/Navbar.vue';
  import ControlSidebar from '../components/ControlSidebar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    components: {
      Navbar,
      ControlSidebar,
      Footer
    }
  }
</script>

<template>
  <Navbar />
  <div class="content-wrapper">
    <div class="content">
      <div class="container-fluid">
       <br><h1 style="text-align:center">Absensi</h1>
      </div>
    </div>
  </div>
  <ControlSidebar />
  <Footer />
</template>