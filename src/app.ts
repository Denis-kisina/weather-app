import { loadCordinates } from './utils/fileUtil';
import { WeatherService } from './services/WeatherService';
import { ISSLocationService } from './services/ISSSateliteService';

function getData() {
  const issLocatonResponse = new ISSLocationService();
  issLocatonResponse.getISSLocationData();
  const cordinates = loadCordinates();
  const cordinate = cordinates[cordinates.length - 1];
  console.log(isCordinatesEmpty(cordinate));
  if (isCordinatesEmpty(cordinate)) {
    const latitude = cordinate.latitude;
    const longitude = cordinate.longitude;
    let weatherInfo = new WeatherService(latitude, longitude);
    const weatherResponse = weatherInfo.getWeather();
  } else {
    console.log('No cordinate. try again.');
  }
}

getData();

function isCordinatesEmpty(value: string): boolean {
  return value.length !== 0;
}
