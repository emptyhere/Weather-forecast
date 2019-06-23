import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLocation: {
      latitude: null,
      longitude: null
    }

  },
  mutations: {
    getGeoLocation (state) {
      navigator.geolocation.getCurrentPosition((position) => {
        state.userLocation.latitude = position.coords.latitude
        state.userLocation.longitude = position.coords.longitude
      })
    }

  },
  actions: {
    getGeoLocation ({ commit }) {
      commit('getGeoLocation')
    }
  }
})
