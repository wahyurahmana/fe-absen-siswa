<script>
  import { mapWritableState, mapActions } from 'pinia'
  import {SiswaStore} from '../stores/SiswaStore.js'
  import Navbar from "../components/Navbar.vue";
  import ControlSidebar from "../components/ControlSidebar.vue";
  import Footer from "../components/Footer.vue";
  export default {
    computed: {
      ...mapWritableState(SiswaStore, ['loading','error', 'detailSiswa'])
    },
    methods : {
      ...mapActions(SiswaStore, ['getDetailDataSiswa', 'editDataSiswa']),
      handleEditDataSiswa(){
        this.editDataSiswa(this.$route.params.idSiswa)
      }
    },
    components: {
      Navbar,
      ControlSidebar,
      Footer,
    },
    mounted(){
      this.getDetailDataSiswa(this.$route.params.idSiswa)
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
          <router-link to="/data-siswa">
            <button type="button" class="btn btn-outline-primary">
              Kembali
            </button>
          </router-link>
          <div class="col-sm-6">
            <h1>Edit Data Siswa</h1>
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
              <form @submit.prevent="handleEditDataSiswa">
                <div class="card-body">
                  <div class="form-group">
                    <label for="nisn">NISN</label>
                    <input type="text" class="form-control" id="nisn" placeholder="Masukkan NISN" v-model="detailSiswa.nisn"/>
                  </div>
                  <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama Lengkap" v-model="detailSiswa.nama_lengkap"/>
                  </div>
                  <div class="form-group">
                        <label>Jenis Kelamin</label>
                        <select class="custom-select" v-model="detailSiswa.jenis_kelamin">
                          <option value="" disabled>Pilih</option>
                          <option value="L">Laki-laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>
                  <div class="form-group">
                    <label for="tempatlahir">Tempat Tanggal Lahir</label>
                    <input type="text" class="form-control" id="tempatlahir" placeholder="Masukkan Tempat Lahir" v-model="detailSiswa.tempat_lahir"/>
                    <span><input type="date" class="form-control" id="tanggallahir" placeholder="dd-mm-yyyy" v-model="detailSiswa.ttl"/></span>
                  </div>
                  <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <input type="text" class="form-control" id="alamat" placeholder="Masukkan Alamat" v-model="detailSiswa.alamat"/>
                  </div>
                  <div class="form-group">
                    <label for="nohpsiswa">No. HP Siswa</label>
                    <input type="number" class="form-control" id="nohpsiswa" placeholder="Masukkan No. HP Siswa" v-model="detailSiswa.no_hp_siswa"/>
                  </div>
                  <div class="form-group">
                    <label for="nohportu">No. HP Orangtua/Wali</label>
                    <input type="number" class="form-control" id="nohportu"
                      placeholder="Masukkan No. HP Orangtua/Wali" v-model="detailSiswa.no_hp_ortu"/>
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
                <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" v-if="error">
                  <strong>{{error}}</strong>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
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