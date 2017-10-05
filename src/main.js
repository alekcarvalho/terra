import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import VueScrollReveal from 'vue-scroll-reveal';
import '../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min.js'

Vue.use(VueScrollReveal, {
  duration: 50000,
});
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
