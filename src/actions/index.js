import axios from 'axios';

const API_KEY = 'bf65376f6a8fa19fc8d6e95e798a06a0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request //if the payload is a promise redux_promise will wait for the response and put it in place
  };
}
