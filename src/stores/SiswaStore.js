import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'

export const SiswaStore = defineStore('SiswaStore', {
  state: () => {
    return {
      data : [],
      nisn : "",
      nama_lengkap : "",
      jenis_kelamin : "",
      alamat : "",
      tempat_lahir : "",
      ttl : "",
      no_hp_siswa : "",
      no_hp_ortu : "",
      loading : false,
      error : ""
    }
  },
  actions: {
    async getAllDataSiswa() {
      try {
        this.data = []
        const result = await axios({
          url :'http://localhost:3000/siswa',
          method : 'GET',
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        this.data = result.data
      } catch (error) {
        console.log(error);
      }
    },
    async addDataSiswa(){
      try {
        this.loading = true
        await axios({
          url :'http://localhost:3000/siswa',
          method : 'POST',
          headers : {
            access_token : localStorage.getItem('access_token')
          },
          data : {
            nisn : this.nisn,
            nama_lengkap : this.nama_lengkap,
            jenis_kelamin : this.jenis_kelamin,
            alamat : this.alamat,
            tempat_lahir : this.tempat_lahir,
            ttl : this.ttl,
            no_hp_siswa : `62${this.no_hp_siswa}`,
            no_hp_ortu : `62${this.no_hp_ortu}`
          }
        })
        Swal.fire('Data Siswa Berhasil Ditambahkan!')
        this.loading = false
        this.getAllDataSiswa()
        this.router.push({name : 'DataSiswa'})
      } catch (error) {
        this.loading = false
        this.error = error.response.data.message
        console.log(error);
      }
    },
    async deleteSiswa(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const result = await axios({
              url :'http://localhost:3000/siswa/'+id,
              method : 'DELETE',
              headers : {
                access_token : localStorage.getItem('access_token')
              }
            })
            this.getAllDataSiswa()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } catch (error) {
            console.log(error);
          }
        }
      })
    },
    async absensiSiswa(id_siswa, status){
      try {
        this.loading = true
        await axios({
          url :'http://localhost:3000/siswa/absensi',
          method : 'POST',
          headers : {
            access_token : localStorage.getItem('access_token')
          },
          data : {
            id_siswa,
            status
          }
        })
        Swal.fire(`Berhasil Mengirim Pesan ${status} Ke WhatsApp Orang Tua!`)
        this.loading = false
        this.getAllDataSiswa()
        this.router.push({name : 'AbsensiSiswa'})
      } catch (error) {
        this.loading = false
        this.error = error.response.data.message
        console.log(error);
      }
    },
  },
})