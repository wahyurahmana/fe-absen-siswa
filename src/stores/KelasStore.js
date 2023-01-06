import { defineStore } from 'pinia'
import axios from 'axios';

export const KelasStore = defineStore('KelasStore', {
  state: () => {
    return {
      dataKelas : [],
      dataSiswaKelas: [],
      idDataKelasOption : 0
    }
  },
  actions: {
    async daftarKelas(){
      try {
        const {data} =  await axios({
          url : import.meta.env.VITE_BASE_URL+'kelas',
          method : 'GET',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          }
        })
        this.dataKelas = data
      } catch (error) {
        console.log(error);
      }
    },
    async getDataSiswaKelas(){
      try {
        const {data} =  await axios({
          url : import.meta.env.VITE_BASE_URL+'kelas/'+this.idDataKelasOption,
          method : 'GET',
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('access_token')
          }
        })
        this.dataSiswaKelas = data.Siswas
      } catch (error) {
        console.log(object);
      }
    }
  },
})