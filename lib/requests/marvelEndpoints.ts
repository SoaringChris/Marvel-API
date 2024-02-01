const https = require('node:https')
const crypto = require('crypto')
import { ComicsEndpoints } from "./comicsEndpoints"
import MarvelContainer from "../models/marvelContainer"
import MarvelWrapper from "../models/marvelWrapper"
import { MarvelRequest } from "../models/requests/marvelRequest"

export module MarvelEndpoints{
    export let apiKey: string
    export let secretKey: string
    let baseUrl = 'https://gateway.marvel.com/v1/public/'

    export let comicsEndpoints = ComicsEndpoints

    export const get = async <T>(url: string, requestObject: MarvelRequest | undefined = undefined): Promise<MarvelContainer<T> | undefined> => {
        return new Promise(function(resolve, reject) {
            let _url = baseUrl + url
            if(requestObject) {
                _url += requestObject.toQueryString()
            }else{
                _url += '?'
            }
            let timestamp = new Date().getTime()
            let hash = crypto.createHash('md5').update(timestamp + secretKey + apiKey).digest('hex')
            _url += `ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
            https.get(_url, (res: any) => {
                const { statusCode } = res
                let error;

                if(statusCode !== 200){
                    error = new Error(`Request failed \n Status ${statusCode}`)
                }

                if(error){
                    console.error(error.message);
                    res.resume();
                    return
                }

                res.setEncoding('utf8')
                let rawData = ''
                res.on('data', (chunk: any) => {rawData += chunk})
                res.on('end', () => {
                    try{
                        let parsedData = JSON.parse(rawData)
                        resolve((parsedData as MarvelWrapper<T>).data)
                    }catch(e){
                        console.error(e)
                        reject(e)
                    }
                })
            })
        })
    }

    export function setApiKeys(key: string, secret: string){
        apiKey = key
        secretKey = secret
    }
}