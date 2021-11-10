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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlConnectionserviceUtil = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
// export const get = (url: string, apiKey: string): any => {
//   return async (): Promise<ISSPosition[]> => {
//     return await f(url);
//   };
// };
// export const f = (url: string): any => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((e) => {
//       console.error(e);
//       const errorBody = async () => {
//         await e.response.text();
//       };
//       console.error(`Error body: ${errorBody}`);
//     });
// }
function request(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, node_fetch_1.default)(url);
            return yield response.json();
        }
        catch (e) {
            console.error(`Error body: ${e}`);
            throw (e);
        }
    });
}
const options = {
    "method": "GET"
};
exports.urlConnectionserviceUtil = {
    get: (url) => request(url)
};
let t = exports.urlConnectionserviceUtil.get('http://api.open-notify.org/iss-now.json');
console.log("Testtginb" + t);
