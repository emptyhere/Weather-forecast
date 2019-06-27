<template>
<div>
    <div class="header-cont">
        <div class="mainTitle">WEATHER-FORECAST</div>
        <input type="text">
     </div>
    <nav>
        <ul class="nav">
            <li class="nav-item"><router-link to="/today">Today</router-link></li>
            <li class="nav-item"><router-link to="/fiveday">5-day forecast</router-link></li>
        </ul>
     </nav>
</div>
</template>

<script>
/*
import apiService from '../services/apiService'
let apiServices = new apiService()
*/

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
