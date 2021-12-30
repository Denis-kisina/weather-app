"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCordinates = exports.saveCordinates = void 0;
const fs_1 = __importDefault(require("fs"));
const saveCordinates = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs_1.default.writeFileSync('./node_modules/cordinates.json', dataJSON);
};
exports.saveCordinates = saveCordinates;
const loadCordinates = () => {
    try {
        const dataBuffer = fs_1.default.readFileSync('./node_modules/cordinates.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};
exports.loadCordinates = loadCordinates;
