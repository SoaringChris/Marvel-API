import MarvelStory from "../models/marvelStory";
import MarvelStoriesRequest from "../models/requests/marvelStoriesRequest";
import { MarvelEndpoints } from "./marvelEndpoints";

export module StoriesEndpoints{
    export const getStories = (args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`stories`, args)
    export const getStoriesById = (id: number) => MarvelEndpoints.get<MarvelStory>(`stories/${id}`);
    export const getStoriesByCharacter = (characterId: number, args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`character/${characterId}/stories`, args);
    export const getStoriesByComic = (comicId: number, args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`comics/${comicId}/stories`, args);
    export const getStoriesByCreator = (creatorId: number, args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`creators/${creatorId}/stories`, args);
    export const getStoriesByEvent = (eventId: number, args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`events/${eventId}/stories`, args);
    export const getStoriesBySeries = (seriesId: number, args: MarvelStoriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelStory>(`series/${seriesId}/stories`, args);
}