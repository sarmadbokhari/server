import Vue from 'vue'
import kadabraClient from '@kadabra/client'

let kadabraServerUrl = window.location.href
try {
  if (webpackHotUpdate) {
    kadabraServerUrl = 'localhost:7777'
  }
} catch(_) {}

const service = kadabraClient(kadabraServerUrl)
export const feathersClient = service('users').client

Vue.prototype.$K = service
Vue.prototype.$kadabra = feathersClient
