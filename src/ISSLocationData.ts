export interface ISSLocationData {
    timestamp: number;
    iss_position: IssPosition;
    message: string;
  }
  export interface IssPosition {
    latitude: string;
    longitude: string;
  }
  