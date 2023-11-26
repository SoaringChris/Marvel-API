import * as Requests from "./models/requests/marvelRequest";
import { MarvelEndpoints } from "./requests/marvelEndpoints";
const crypto = require("crypto");

export module MarvelApi {
    export class MarvelApi{
        apiKey:string;
        secretKey: string;
        readonly endpoints = MarvelEndpoints

        constructor(apiKey:string, secretKey:string){
            this.apiKey = apiKey;
            this.secretKey = secretKey;
            MarvelEndpoints.apiKey = this.apiKey;
            MarvelEndpoints.secretKey = this.secretKey;
            let x = new MarvelRequests.SeriesRequest()
        }
    }

    export const MarvelRequests = Requests.MarvelRequests
}