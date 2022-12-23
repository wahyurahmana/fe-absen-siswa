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
      loading : false
    }
  },
  actions: {
    async getAllDataGuru() {
      try {
        this.data = []
        const result = await axios({
          url :'http://localhost:3000/guru',
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
    async addDataGuru(){
      try {
        this.loading = true
        await axios({
          url :'http://localhost:3000/guru',
          method : 'POST',
          headers : {
            access_token : localStorage.getItem('access_token')
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
              url :'http://localhost:3000/guru/'+id,
              method : 'DELETE',
              headers : {
                access_token : localStorage.getItem('access_token')
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
  }
})