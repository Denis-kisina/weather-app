import { getSunrise, getSunset } from 'sunrise-sunset-js';

const isVisible = (lat: number, long: number): boolean => {
    return isItPassedSunset(lat, long);
}

const isItPassedSunset = (lat: number, long: number): boolean => {
    const sunset = getSunset(lat, long);
    const now = new Date();
    return sunset === now;
}

export { isVisible }
