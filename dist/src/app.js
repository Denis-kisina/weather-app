"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtil_1 = require("./utils/fileUtil");
const WeatherService_1 = require("./services/WeatherService");
const ISSSateliteService_1 = require("./services/ISSSateliteService");
function getData() {
    const issLocatonResponse = new ISSSateliteService_1.ISSLocationService();
    issLocatonResponse.getISSLocationData();
    const cordinates = (0, fileUtil_1.loadCordinates)();
    const cordinate = cordinates[cordinates.length - 1];
    console.log(isCordinatesEmpty(cordinate));
    if (isCordinatesEmpty(cordinate)) {
        const latitude = cordinate.latitude;
        const longitude = cordinate.longitude;
        let weatherInfo = new WeatherService_1.WeatherService(latitude, longitude);
        const weatherResponse = weatherInfo.getWeather();
    }
    else {
        console.log('No cordinate. try again.');
    }
}
getData();
function isCordinatesEmpty(value) {
    return value.length !== 0;
}
