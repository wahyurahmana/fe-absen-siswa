<script>
  import { mapWritableState, mapActions } from 'pinia'
  import {GuruStore} from '../stores/GuruStore.js'
  import Navbar from '../components/Navbar.vue';
  import ControlSidebar from '../components/ControlSidebar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    computed: {
      ...mapWritableState(GuruStore, ['data'])
    },
    methods : {
      ...mapActions(GuruStore, ['getAllDataGuru', 'deleteGuru']),
      goToEdit(idGuru){
        this.$router.push({
          name : 'EditDataGuru', 
          params : {
            idGuru
          }
        })
      }
    },
    components: {
      Navbar,
      ControlSidebar,
      Footer
    },
    mounted() {
      this.getAllDataGuru()
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
            <h1>Data Guru</h1>
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
                
                <router-link to="/tambah-data-guru"><button type="button" class="btn btn-outline-primary">Tambah Guru</button></router-link>
                
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
                      <th>Nama Lengkap</th>
                      <th>alamat</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in data" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{item.nama_lengkap}}</td>
                      <td>{{item.alamat}}</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm mr-2">Detail</button>
                        <button type="button" class="btn btn-secondary btn-sm mr-2" @click="() => goToEdit(item.id)">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm" @click="() => deleteGuru(item.id)">Hapus</button>
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