import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import _routes from './routes'

require('jquery')
require('bootstrap-webpack')
require('lodash')

// Modules
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: _routes
})

const app = new Vue({
  router
}).$mount('#app')
