<template>
  <div id="app">
<AppHeader></AppHeader>
<CurrentWeather></CurrentWeather>
  </div>
</template>

<script>
import Vue from 'vue'

import AppHeader from './components/AppHeader'
import CurrentWeather from './components/CurrentWeather'

export default {
  components:{
    AppHeader,
    CurrentWeather
  }
}
</script>

