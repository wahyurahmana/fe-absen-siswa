import { defineStore } from 'pinia'
import axios from 'axios';

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
          // url :`${process.env.VUE_APP_SERVER_BASE_URL}guru`,
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
        this.loading = false
        this.router.push({name : 'DataSiswa'})
      } catch (error) {
        this.loading = false
        this.error = error.response.data.message
        console.log(error);
      }
    }
  },
})