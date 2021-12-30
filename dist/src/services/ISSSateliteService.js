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
exports.ISSLocationService = void 0;
const URLConnectionService_1 = require("./URLConnectionService");
const fileUtil_1 = require("../utils/fileUtil");
class ISSLocationService {
    constructor() {
        this.ISS_URL = 'http://api.open-notify.org/iss-now.json';
    }
    getISSLocationData() {
        return __awaiter(this, void 0, void 0, function* () {
            const issData = yield (0, URLConnectionService_1.makeRequest)(this.ISS_URL);
            if (issData === null || issData === void 0 ? void 0 : issData.data.iss_position) {
                const cordinates = (0, fileUtil_1.loadCordinates)();
                cordinates.push({
                    latitude: issData.data.iss_position.latitude,
                    longitude: issData.data.iss_position.longitude,
                });
                (0, fileUtil_1.saveCordinates)(cordinates);
                return true;
            }
        });
    }
}
exports.ISSLocationService = ISSLocationService;
