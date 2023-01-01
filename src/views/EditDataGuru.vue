<script>
  import { mapWritableState, mapActions } from 'pinia'
  import {GuruStore} from '../stores/GuruStore.js'
  import Navbar from "../components/Navbar.vue";
  import ControlSidebar from "../components/ControlSidebar.vue";
  import Footer from "../components/Footer.vue";
  export default {
    computed: {
      ...mapWritableState(GuruStore, ['loading','error', 'detailGuru'])
    },
    methods : {
      ...mapActions(GuruStore, ['getDetailGuru', 'editDataGuru']),
      handleEditDataGuru(){
        this.editDataGuru(this.$route.params.idGuru)
      }
    },
    components: {
      Navbar,
      ControlSidebar,
      Footer,
    },
    mounted(){
      this.getDetailGuru(this.$route.params.idGuru)
    }
  };
</script>

<template>
  <Navbar />
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <router-link to="/data-guru">
            <button type="button" class="btn btn-outline-primary">
              Kembali
            </button>
          </router-link>
          <div class="col-sm-6">
            <h1>Edit Data Guru</h1>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-primary">
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="handleEditDataGuru">
                <div class="card-body">
                  <div class="form-group">
                    <label for="nama_lengkap">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama_lengkap" placeholder="Masukkan Nama Lengkap" v-model="detailGuru.nama_lengkap"/>
                  </div>
                  <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <input type="text" class="form-control" id="alamat" placeholder="Masukkan Alamat" v-model="detailGuru.alamat"/>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">
                    <div class="spinner-border text-light" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else>
                      UPDATE
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <ControlSidebar />
  <Footer />
</template>