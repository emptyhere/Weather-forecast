import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./App.vue')
    },
    {
      path: '/',
      name: 'today',
      component: () => import('./components/CurrentWeather.vue')
    },
    {
      path: '/',
      name: 'fiveday',
      component: () => import('./components/CurrentWeather.vue')
    }

  ]
})
