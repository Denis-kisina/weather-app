"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const makeRequest = (url) => {
    try {
        console.log(url);
        return axios_1.default.get(url);
    }
    catch (err) {
        if (err) {
            console.error(`Error body: ${err}`);
        }
    }
};
exports.makeRequest = makeRequest;
