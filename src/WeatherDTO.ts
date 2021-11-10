export class WeatherDTO {
    private weather: string;
    private dayTime: string;
    private lat: string;
    private lon: string;

    constructor(dayTime: string, weather: string, lat: string, lon: string) {
        this.dayTime = dayTime;
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
