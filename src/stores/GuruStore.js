import { defineStore } from 'pinia'
import axios from 'axios';

export const GuruStore = defineStore('GuruStore', {
  state: () => {
    return {
      data : [],
      username : "",
      nama_lengkap : "",
      alamat : ""
    }
  },
  actions: {
    async getAllDataGuru() {
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
    async addDataGuru(){
      try {
        const result = await axios({
          // url :`${process.env.VUE_APP_SERVER_BASE_URL}guru`,
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
        return result.data
      } catch (error) {
        console.log(error);
      }
    }
  },
})