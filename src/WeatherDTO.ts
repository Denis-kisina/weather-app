export class WeatherDTO {
  private weather: string;

  private lat: string;

  private lon: string;

  constructor(weather: string, lat: string, lon: string) {
    this.weather = weather;
    this.lat = lat;
    this.lon = lon;
  }

  public getLat() : string {
    return this.lat;
  }

  public getLon() : string {
    return this.lon;
  }
}
