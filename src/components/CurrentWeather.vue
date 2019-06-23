<template>
        <div class="cur-weath">
            <div class="cur-weath__cont">
                <div id="title">Current weather</div>
                <div id="date">{{new Date}}</div>
            </div>
            <div class="cur-weath__cont --sub">

                <div class="ico-cont">
                    <img id="weath-icon"/>
                    <div id="under-icon">
                        <span v-for="(item, index) in weatherData" :key='index'>
                            {{item.main}}
                        </span>
                    </div>
                </div>

                <div class="temp-cont">
                    <div id="temp">
                        <span v-for="(item, index) in otherData" :key='index'>
                            {{item.temp}}
                        </span>°C
                    </div>
                    <div id="under-temp"></div>
                </div>

                <div class="idk-how-name-this-shi">
                    <div id="sunrise">
                        <span v-for="(item, index) in otherData" :key='index'>
                            {{item.sunrise}}
                        </span>   
                    </div>
                    <div id="sunset">
                        <span v-for="(item, index) in otherData" :key='index'>
                            {{item.sunset}}
                        </span>                          
                    </div>
                    <div id="duration"></div>

                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";
import apiService from "../services/apiService.js";
import { constants } from 'fs';
let apiServices = new apiService()

export default {
    data() {
        return{
            weatherData:[],
            otherData:[],

            kek:{meme:'kek',
            shmek:{
                lel:'lol'
             }
            }
        };
    },
    created() {
    
    this.$store.dispatch('getGeoLocation')
    setTimeout(()=>{
        apiServices.getCurrentWeather(this.$store.state.userLocation.latitude,
        this.$store.state.userLocation.longitude)
        .then(response => (this.weatherData = response.data.weather,
        this.otherData = response.data
        ))
        console.log(this.$store.state.userLocation.latitude)
    }, 2500)

  }
}
</script>
