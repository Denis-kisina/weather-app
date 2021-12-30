"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVisible = void 0;
const sunrise_sunset_js_1 = require("sunrise-sunset-js");
const isVisible = (lat, long) => isItPassedSunset(lat, long);
exports.isVisible = isVisible;
const isItPassedSunset = (lat, long) => {
    const sunset = (0, sunrise_sunset_js_1.getSunset)(lat, long);
    const now = new Date();
    return sunset === now;
};
