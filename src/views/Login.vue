<script>
import { mapWritableState, mapActions } from 'pinia'
import {AuthStore} from '../stores/AuthStore.js'

export default {
  computed : {
    ...mapWritableState(AuthStore, ['username', 'password', 'loading', 'errors'])
  },
  methods : {
    ...mapActions(AuthStore, ['login'])
  }
}
</script>

<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>SMKN 2 </b>Sumbawa Besar</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Silahkan Login!</p>

          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username" v-model="username">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- /.col -->
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-block">
                  <div class="spinner-border text-light" role="status" v-if="loading">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div v-else>
                    Sign In
                  </div>
                </button>
              </div>
              <!-- /.col -->
            </div>
            <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" v-if="errors">
              <strong>{{errors}}</strong>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </form>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>