"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDTO = void 0;
class WeatherDTO {
    constructor(weather, lat, lon) {
        this.weather = weather;
        this.lat = lat;
        this.lon = lon;
    }
    getLat() {
        return this.lat;
    }
    getLon() {
        return this.lon;
    }
}
exports.WeatherDTO = WeatherDTO;
