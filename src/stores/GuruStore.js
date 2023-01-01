import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'

export const GuruStore = defineStore('GuruStore', {
  state: () => {
    return {
      data : [],
      username : "",
      nama_lengkap : "",
      alamat : "",
      loading : false,
      detailGuru : {}
    }
  },
  actions: {
    async getAllDataGuru() {
      try {
        this.data = []
        const result = await axios({
          url :import.meta.env.VITE_BASE_URL+'guru',
          method : 'GET',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          }
        })
        this.data = result.data
      } catch (error) {
        console.log(error);
      }
    },
    async getDetailGuru(id) {
      try {
        const result = await axios({
          url :import.meta.env.VITE_BASE_URL+'guru/'+id,
          method : 'GET',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          }
        })
        this.detailGuru = {...result.data}
      } catch (error) {
        console.log(error);
      }
    },
    async addDataGuru(){
      try {
        this.loading = true
        await axios({
          url :import.meta.env.VITE_BASE_URL+'guru',
          method : 'POST',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          },
          data : {
            username : this.username,
            nama_lengkap : this.nama_lengkap,
            alamat : this.alamat
          }
        })
        Swal.fire('Data Guru Berhasil Ditambahkan!')
        this.loading = false
        this.getAllDataGuru()
        this.router.push({name : 'DataGuru'})
      } catch (error) {
        console.log(error);
      }
    },
    async deleteGuru(id) {
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
            await axios({
              url :import.meta.env.VITE_BASE_URL+'guru/'+id,
              method : 'DELETE',
              headers : {
                Authorization : 'Bearer '+localStorage.getItem('access_token')
              }
            })
            this.getAllDataGuru()
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
    async editDataGuru(id){
      try {
        this.loading = true
        await axios({
          url :import.meta.env.VITE_BASE_URL+'guru/'+id,
          method : 'PUT',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          },
          data : {
            nama_lengkap : this.detailGuru.nama_lengkap,
            alamat : this.detailGuru.alamat
          }
        })
        Swal.fire('Data Guru Berhasil Di Edit')
        this.loading = false
        this.getAllDataGuru()
        this.router.push({name : 'DataGuru'})
      } catch (error) {
        console.log(error);
      }
    }
  }
})