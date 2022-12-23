<script>
  import { mapWritableState, mapActions } from 'pinia'
  import {GuruStore} from '../stores/GuruStore.js'
  import Navbar from "../components/Navbar.vue";
  import ControlSidebar from "../components/ControlSidebar.vue";
  import Footer from "../components/Footer.vue";
  export default {
    computed: {
      ...mapWritableState(GuruStore, ['username', 'nama_lengkap', 'alamat', 'loading','error'])
    },
    methods : {
      ...mapActions(GuruStore, ['addDataGuru'])
    },
    components: {
      Navbar,
      ControlSidebar,
      Footer,
    },
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
          <button type="button" class="btn btn-outline-primary" onclick="history.back()">
            Kembali
          </button>
          <div class="col-sm-6">
            <h1>Tambah Data Guru</h1>
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
              <form @submit.prevent="addDataGuru">
                <div class="card-body">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Masukkan Username" v-model="username"/>
                  </div>
                  <div class="form-group">
                    <label for="nama_lengkap">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama_lengkap" placeholder="Masukkan Nama Lengkap" v-model="nama_lengkap"/>
                  </div>
                  <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <input type="text" class="form-control" id="alamat" placeholder="Masukkan Alamat" v-model="alamat"/>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">
                    <div class="spinner-border text-light" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else>
                      Submit
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