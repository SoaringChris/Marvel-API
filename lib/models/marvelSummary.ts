import { MarvelEndpoints } from "../requests/marvelEndpoints";import MarvelContainer from "./marvelContainer";

export default class MarvelSummary<Type>{
    resourceURI: string | undefined;
    name: string | undefined;

    getFullEntity = async (): Promise<MarvelContainer<Type> | undefined> => {
        if(this.resourceURI){
            return MarvelEndpoints.get<Type>(this.resourceURI)
        }
        return undefined;
    }
}