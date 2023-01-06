<script>
import { mapWritableState, mapActions } from "pinia";
import { SiswaStore } from "../stores/SiswaStore.js";
import Navbar from "../components/Navbar.vue";
import ControlSidebar from "../components/ControlSidebar.vue";
import Footer from "../components/Footer.vue";
export default {
  computed: {
    ...mapWritableState(SiswaStore, ["data"]),
  },
  methods: {
    ...mapActions(SiswaStore, ["getAllDataSiswa", "deleteSiswa"]),
    goToEdit(idSiswa) {
      this.$router.push({
        name: "EditDataSiswa",
        params: {
          idSiswa,
        },
      });
    },
  },
  components: {
    Navbar,
    ControlSidebar,
    Footer,
  },
  mounted() {
    this.getAllDataSiswa();
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
          <div class="col-sm-6">
            <h1>Rekap Absen</h1>
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
            <div class="card">
              <div class="card-header">
                <!--Header Tabel-->
                <div class="row d-flex justify-content-center">
                  <div class="col">
                    <select class="form-select" aria-label=".form-select example">
                      <option selected>Pilih Jurusan</option>
                      <option value="BKP">BKP</option>
                      <option value="DPIB">DPIB</option>
                      <option value="MMD">MMD</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select" aria-label=".form-select example">
                      <option selected>Pilih Kelas</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div class="col">
                    <span><input type="date" class="form-control" id="tanggalabsen" placeholder="dd-mm-yyyy"/></span>
                  </div>
<!-- 
                  <div class="col card-tools">
                    <div class="input-group input-group" style="width: auto">
                      <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!--END Header Tabel-->
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table w-auto small tbl-font table-bordered text-nowrap">
                  <thead>
                    <tr>
                      <th class="align-middle" rowspan="2">No</th>
                      <th class="align-middle" rowspan="2">NISN</th>
                      <th class="align-middle" rowspan="2">Nama Lengkap</th>
                      <th class="text-center" colspan="31">Tanggal</th>
                      <th class="text-center" colspan="6">Jumlah</th>
                    </tr>
                    <tr>
                      <!--looping tanggal-->
                      <th class="align-middle" v-for="(n, index) in 31">
                        {{ n }}
                      </th>
                      <!--end looping tanggal-->
                      <th class="align-middle">H</th>
                      <th class="align-middle">S</th>
                      <th class="align-middle">I</th>
                      <th class="align-middle">A</th>
                      <th class="align-middle">T</th>
                      <th class="align-middle">B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr>
                      <td>1</td>
                      <td>2227138</td>
                      <td>A RIAN RANA PRATAMA</td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
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

<style>
.tbl-font{
  font-size: 11px;
}
.input-group-append {
  cursor: pointer;
}
</style>
