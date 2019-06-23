<template>
<div>
    <div class="header-cont">
        <div class="mainTitle">WEATHER-FORECAST</div>
        <input type="text">
     </div>
    <nav>
        <ul class="nav">
            <li class="nav-item"><a href="#">Today</a></li>
            <li class="nav-item"><a href="#">5-day forecast</a></li>
        </ul>
     </nav>
</div>
</template>

<script>
import apiService from '../services/apiService'
let apiServices = new apiService()

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
export default {
    /*
created() {
    const getGeoLoc = (callback) => {
     callback
     this.$store.dispatch('getGeoLocation')
     console.log(apiServices)
     }
     getGeoLoc(apiServices.getCurrentWeather(this.$store.state.userLocation.latitude, this.$store.state.userLocation.longitude)
     .then(response => (this.weather = response.data.weather))
     )
     
     console.log(this.$store.state.userLocation.latitude)

  }*/
}
</script>
