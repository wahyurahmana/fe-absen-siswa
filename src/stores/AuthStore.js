import { defineStore } from 'pinia'
import axios from 'axios';
// import * as dotenv from 'dotenv'
// dotenv.config()

export const AuthStore = defineStore('AuthStore', {
  state: () => {
    return {
      username : "",
      password : "",
      errors : "",
      loading : false
    }
  },
  actions: {
    async login() {
      try {
        this.loading = true
        const result = await axios({
          // url :`${process.env.VUE_APP_SERVER_BASE_URL}user/login`,
          url : 'http://localhost:3000/user/login',
          method : 'POST',
          data : {
            username : this.username,
            password : this.password
          }
        })
        this.loading = false
        localStorage.setItem('access_token', result.data.access_token)
        this.router.push({name : 'home'})
      } catch (error) {
        this.loading = false
        this.errors = error.response.data.message
        return error
      }
    }
  }
})