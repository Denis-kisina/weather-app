"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISSPosition_1 = require("./ISSPosition");
// require('dotenv').config({path: '/Users/deniskisina/Projects/node-projects/iss-app/weather-app/.env'});
const apiKey = process.env.OPEN_WEATHER_API_KEY;
console.log(apiKey);
const lat = '';
const lon = '';
const ISS_URL = 'http://api.open-notify.org/iss-now.json';
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const logLagUrl = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const options = {
    "method": "GET"
};
// const url = `${OPEN_WEATHER_URL}?q=phoenix&appid=${API_KEY}`;
// const response =  await fetch(ISS_URL, options)
//         .then(res => res.json())
//         .then(res => console.log('Indside' + res))
//         .catch(e => {
//             console.error(e);
//             const errorBody = async () => { await e.response.text(); }
//             console.error(`Error body: ${errorBody}`);
//         });
const response = new ISSPosition_1.issReposity().getISSData(ISS_URL);
console.log(response);
// const data = async () => {
//     await response
// }
// const response = await fetch(url);
// const data = await response.json();
// const lat = data.iss_position.latitude
// const log = data.iss_position.longitude
// console.log(log, lat);
// console.log(data.message)
