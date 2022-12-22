import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AbsensiSiswa from "../views/AbsensiSiswa.vue";
import DataGuru from "../views/DataGuru.vue";
import DataSiswa from "../views/DataSiswa.vue";
import Login from "../views/Login.vue";
import TambahDataSiswa from "../views/TambahDataSiswa.vue"
import TambahDataGuru from "../views/TambahDataGuru.vue"
import axios from "axios";

const checkToken = async () => {
  try {
   const result = await axios({
      url : 'http://localhost:3000/user/check-token',
      method : 'POST',
      data : {
        token : localStorage.getItem('access_token')
      }
    })
    return result.data
  } catch (error) {
    return error
  }
}

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: Dashboard,
            beforeEnter : async (to, from, next) => {
              try {
                const authToken = await checkToken()
                if(authToken.username){
                  next()
                }else{
                  next({name : 'Login'})
                }
              } catch (error) {
                next({name : 'Login'})
              }
            }
        },
        {
            path: "/absensi-siswa",
            name: "AbsensiSiswa",
            component: AbsensiSiswa,
            beforeEnter : async (to, from, next) => {
                try {
                  const authToken = await checkToken()
                  if(authToken.username){
                    next()
                  }else{
                    next({name : 'Login'})
                  }
                } catch (error) {
                  next({name : 'Login'})
                }
              }
        },
        {
            path: "/data-guru",
            name: "DataGuru",
            component: DataGuru,
            beforeEnter : async (to, from, next) => {
                try {
                  const authToken = await checkToken()
                  if(authToken.username){
                    next()
                  }else{
                    next({name : 'Login'})
                  }
                } catch (error) {
                  next({name : 'Login'})
                }
              }
        },
        {
            path: "/data-siswa",
            name: "DataSiswa",
            component: DataSiswa,
            // beforeEnter : async (to, from, next) => {
            //     try {
            //       const authToken = await checkToken()
            //       if(authToken.username){
            //         next()
            //       }else{
            //         next({name : 'Login'})
            //       }
            //     } catch (error) {
            //       next({name : 'Login'})
            //     }
            //   }
        },
        {
            path: "/tambah-data-siswa",
            name: "TambahDataSiswa",
            component: TambahDataSiswa,
            // beforeEnter : async (to, from, next) => {
            //     try {
            //       const authToken = await checkToken()
            //       if(authToken.username){
            //         next()
            //       }else{
            //         next({name : 'Login'})
            //       }
            //     } catch (error) {
            //       next({name : 'Login'})
            //     }
            //   }
        },
        {
            path: "/tambah-data-guru",
            name: "TambahDataGuru",
            component: TambahDataGuru,
            beforeEnter : async (to, from, next) => {
              try {
                const authToken = await checkToken()
                if(authToken.username){
                  next()
                }else{
                  next({name : 'Login'})
                }
              } catch (error) {
                next({name : 'Login'})
              }
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            beforeEnter : async (to, from, next) => {
              try {
                const authToken = await checkToken()
                if(!authToken.username){
                  next()
                }else{
                  next({name : 'home'})
                }
              } catch (error) {
                next({name : 'Login'})
              }
            }
        },
    ],
});

export default router;
