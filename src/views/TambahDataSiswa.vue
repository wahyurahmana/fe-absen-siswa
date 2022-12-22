<script>
  import Navbar from "../components/Navbar.vue";
  import ControlSidebar from "../components/ControlSidebar.vue";
  import Footer from "../components/Footer.vue";
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
          <button type="button" class="btn btn-outline-primary" onclick="history.back()">
            Kembali
          </button>
          <div class="col-sm-6">
            <h1>Tambah Data Siswa</h1>
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
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">NISN</label>
                    <input type="text" class="form-control" id="nisn" placeholder="Masukkan NISN" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama Lengkap" />
                  </div>
                  <div class="form-group">
                        <label>Jenis Kelamin</label>
                        <select class="custom-select">
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </select>
                      </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Tempat Tanggal Lahir</label>
                    <input type="text" class="form-control" id="tempatlahir" placeholder="Masukkan Tempat Lahir" />
                    <span><input type="date" class="form-control" id="tanggallahir" placeholder="dd-mm-yyyy" /></span>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Alamat</label>
                    <input type="text" class="form-control" id="alamat" placeholder="Masukkan Alamat" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">No. HP Siswa</label>
                    <input type="number" class="form-control" id="nohpsiswa" placeholder="Masukkan No. HP Siswa" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">No. HP Orangtua/Wali</label>
                    <input type="number" class="form-control" id="nohportu"
                      placeholder="Masukkan No. HP Orangtua/Wali" />
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
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