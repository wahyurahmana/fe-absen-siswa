<script>
  import Navbar from "../components/Navbar.vue";
  import ControlSidebar from "../components/ControlSidebar.vue";
  import Footer from "../components/Footer.vue";
  import "../assets/css/btnabsen.css";
  export default {
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
          <div class="col-sm-6">
            <h1>Absensi Siswa</h1>
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
                <!-- <h3 class="card-title">Absensi Siswa</h3> -->

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />

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
                <table class="table table-hover text-nowrap justify-content-center">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NISN</th>
                      <th>Nama</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2227138</td>
                      <td>A RIAN RANA PRATAMA</td>
                      <td>
                        <div class="btn-group">
                          <button class="button-hadir" role="button">
                            Hadir
                          </button>
                          <button class="button-ijin" role="button">
                            Ijin
                          </button>
                          <button class="button-sakit" role="button">
                            Sakit
                          </button>
                          <button class="button-alpa" role="button">
                            Alpa
                          </button>
                          <button class="button-bolos" role="button">
                            Bolos
                          </button>
                          <button class="button-telat" role="button">
                            Telat
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2227139</td>
                      <td>ADJIE RADIMAS PRATAMA</td>
                      <td>
                        <div class="btn-group">
                          <button class="button-hadir" role="button">
                            Hadir
                          </button>
                          <button class="button-ijin" role="button">
                            Ijin
                          </button>
                          <button class="button-sakit" role="button">
                            Sakit
                          </button>
                          <button class="button-alpa" role="button">
                            Alpa
                          </button>
                          <button class="button-bolos" role="button">
                            Bolos
                          </button>
                          <button class="button-telat" role="button">
                            Telat
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2227140</td>
                      <td>AFWAN TSULATSA RIJALULHAQ</td>
                      <td>
                        <div class="btn-group">
                          <button class="button-hadir" role="button">
                            Hadir
                          </button>
                          <button class="button-ijin" role="button">
                            Ijin
                          </button>
                          <button class="button-sakit" role="button">
                            Sakit
                          </button>
                          <button class="button-alpa" role="button">
                            Alpa
                          </button>
                          <button class="button-bolos" role="button">
                            Bolos
                          </button>
                          <button class="button-telat" role="button">
                            Telat
                          </button>
                        </div>
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
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <ControlSidebar />
  <Footer />
</template>
