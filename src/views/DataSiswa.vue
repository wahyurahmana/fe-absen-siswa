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
                
                <button type="button" class="btn btn-outline-primary" onclick="location.href='../tambah-data-siswa'">Tambah Siswa</button>
                
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
                    <tr>
                      <td>1</td>
                      <td>2227138</td>
                      <td>A RIAN RANA PRATAMA</td>
                      <td>Laki-laki</td>
                      <td>Sumbawa, 01-01-2001</td>
                      <td>Sumbawa</td>
                      <td>081000111222</td>
                      <td>082111222333</td>
                      <td>
                        <a class="btn btn-app">
                        <i class="fas fa-edit"></i> Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2227139</td>
                      <td>ADJIE RADIMAS PRATAMA</td>
                      <td>Laki-laki</td>
                      <td>Sumbawa, 02-02-2002</td>
                      <td>Sumbawa</td>
                      <td>081000111222</td>
                      <td>082111222333</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2227140</td>
                      <td>AFWAN TSULATSA RIJALULHAQ</td>
                      <td>Laki-laki</td>
                      <td>Sumbawa, 03-03-2003</td>
                      <td>Sumbawa</td>
                      <td>081000111222</td>
                      <td>082111222333</td>
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