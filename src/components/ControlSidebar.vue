<script>
  export default {
    methods : {
      logout() {
        localStorage.removeItem('access_token')
        this.$router.push({name : 'Login'})
      }
    }
  }
</script>

<template>
  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
  </aside>
  <!-- /.control-sidebar -->
</template>