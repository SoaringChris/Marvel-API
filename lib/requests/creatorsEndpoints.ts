import MarvelCreator from "../models/marvelCreator"
import MarvelCreatorsRequest from "../models/requests/marvelCreatorsRequest"
import { MarvelEndpoints } from "./marvelEndpoints"

export module CreatorsEndpoints{
    export const getCreators = (args: MarvelCreatorsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCreator>('creators', args);
    export const getCreatorsById = (id: number) => MarvelEndpoints.get<MarvelCreator>(`creators/${id}`);
    export const getCreatorsByEvent = (eventId: number, arg: MarvelCreatorsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCreator>(`events/${eventId}/creators`, arg);
    export const getCreatorsBySeries = (seriesId: number, arg: MarvelCreatorsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCreator>(`series/${seriesId}/creators`, arg);
    export const getCreatorsByStory = (storyId: number, arg: MarvelCreatorsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCreator>(`story/${storyId}/creators`, arg);
}