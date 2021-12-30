"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const SunsetValidator_1 = require("../SunsetValidator");
const WeatherDTO_1 = require("../WeatherDTO");
const URLConnectionService_1 = require("./URLConnectionService");
class WeatherService {
    constructor(latitude, longitude) {
        this.API_KEY = '8e81de416e86c8ba7163658d1f0bab54';
        this.BASE_URL = 'http://api.openweathermap.org/data/2.5/find';
        this.latitude = latitude;
        this.longitude = longitude;
    }
    getWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, URLConnectionService_1.makeRequest)(`${this.BASE_URL}?lat=${this.latitude}&lon=${this.longitude}&appid=${this.API_KEY}`);
            const weatherInfo = new WeatherDTO_1.WeatherDTO(response === null || response === void 0 ? void 0 : response.data.list[0].weather.main, response === null || response === void 0 ? void 0 : response.data.list[0].coord.lat, response === null || response === void 0 ? void 0 : response.data.list[0].coord.lon);
            if ((0, SunsetValidator_1.isVisible)(Number(weatherInfo.getLat()), Number(weatherInfo.getLon()))) {
                const display = global.document.getElementById('display');
                const paragraph = document.createElement('p');
                paragraph.textContent = 'ISS is Visible';
                display === null || display === void 0 ? void 0 : display.appendChild(paragraph);
            }
            else {
                const display = document.getElementById('display');
                const paragraph = document.createElement('p');
                paragraph.textContent = 'ISS is not Visible';
                display === null || display === void 0 ? void 0 : display.appendChild(paragraph);
            }
            return weatherInfo;
        });
    }
}
exports.WeatherService = WeatherService;
