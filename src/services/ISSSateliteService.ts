import { makeRequest } from './URLConnectionService'
import { saveCordinates, loadCordinates } from '../utils/fileUtil'

class ISSLocationService {
    private ISS_URL = `http://api.open-notify.org/iss-now.json`;

    async getISSLocationData() {
        const issData = await makeRequest(this.ISS_URL);
        if (issData?.data.iss_position) {
            const cordinates = loadCordinates();
            cordinates.push({
                latitude: issData.data.iss_position.latitude,
                longitude: issData.data.iss_position.longitude
            })
            saveCordinates(cordinates)
            return true;
        }
    }
}

export { ISSLocationService }
