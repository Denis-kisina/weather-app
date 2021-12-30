import { isVisible } from '../SunsetValidator';
import { WeatherDTO } from '../WeatherDTO';
import { makeRequest } from './URLConnectionService';

class WeatherService {
  private API_KEY = '8e81de416e86c8ba7163658d1f0bab54';

  private BASE_URL = 'http://api.openweathermap.org/data/2.5/find';

  private latitude: String | undefined;

  private longitude: String | undefined;

  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  async getWeather() {
    const response = await makeRequest(`${this.BASE_URL}?lat=${this.latitude}&lon=${this.longitude}&appid=${this.API_KEY}`);
    const weatherInfo = new WeatherDTO(response?.data.list[0].weather.main, response?.data.list[0].coord.lat, response?.data.list[0].coord.lon);

    if (isVisible(Number(weatherInfo.getLat()), Number(weatherInfo.getLon()))) {
      const display = global.document.getElementById('display');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'ISS is Visible';
      display?.appendChild(paragraph);
    } else {
      const display = document.getElementById('display');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'ISS is not Visible';
      display?.appendChild(paragraph);
    }
    return weatherInfo;
  }
}

export { WeatherService };
