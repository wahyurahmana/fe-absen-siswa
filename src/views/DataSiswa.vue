<script>
  import { mapWritableState, mapActions } from 'pinia'
  import {SiswaStore} from '../stores/SiswaStore.js'
  import Navbar from '../components/Navbar.vue';
  import ControlSidebar from '../components/ControlSidebar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    computed: {
      ...mapWritableState(SiswaStore, ['data'])
    },
    methods : {
      ...mapActions(SiswaStore, ['getAllDataSiswa', 'deleteSiswa'])
    },
    components: {
      Navbar,
      ControlSidebar,
      Footer
    },
    mounted() {
      this.getAllDataSiswa()
    }
  }
</script>

<template>
  <Navbar />
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Data Siswa</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                
                <router-link to="/tambah-data-siswa"><button type="button" class="btn btn-outline-primary">Tambah Siswa</button></router-link>
                
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NISN</th>
                      <th>Nama Lengkap</th>
                      <th>Jenis Kelamin</th>
                      <th>Tempat Tanggal Lahir</th>
                      <th>Alamat</th>
                      <th>No. HP Siswa</th>
                      <th>No. HP Orangtua/Wali</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in data" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ item.nisn }}</td>
                      <td>{{ item.nama_lengkap }}</td>
                      <td>{{ item.jenis_kelamin }}</td>
                      <td>{{ item.tempat_lahir }}, {{ item.ttl }}</td>
                      <td>{{ item.alamat }}</td>
                      <td>{{ item.no_hp_siswa }}</td>
                      <td>{{ item.no_hp_ortu }}</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm mr-2">Detail</button>
                        <button type="button" class="btn btn-secondary btn-sm mr-2">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm" @click="() => deleteSiswa(item.id)">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <ControlSidebar />
  <Footer />
</template>