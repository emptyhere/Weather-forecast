import axios from 'axios'

export default class apiService {
    _apiBase = 'http://api.openweathermap.org/data/2.5/';

    getResource = async (url) => {
      const res = await axios.get(`${this._apiBase}${url}`)

      if (res.statusText !== 'OK') {
        throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`)
      }
      return res
    };

    getCurrentWeather = async (lat, lon) => {
      const weather = await this.getResource(`weather?lat=${lat}&lon=${lon}&appid=d9c1bf27b78e35489e25659a28c7b4ed&units=metric`)
      return weather
    };
};
