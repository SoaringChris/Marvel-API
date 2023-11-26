import MarvelEvent from "../models/marvelEvent"
import MarvelEventsRequest from "../models/requests/marvelEventsRequest"
import { MarvelEndpoints } from "./marvelEndpoints"

export module EventsEndpoints{
    export const getEventEvents = (args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`events`, args);
    export const getEventsById = (id: number) => MarvelEndpoints.get<MarvelEvent>(`events/${id}`);
    export const getEventsByCharacter = (characterId: number, args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`characters/${characterId}/events`, args);
    export const getEventsByComic = (comicId: number, args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`comics/${comicId}/events`, args);
    export const getEventsByCreator = (creatorId: number, args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`creators/${creatorId}/events`, args);
    export const getEventsBySeries = (seriesId: number, args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`series/${seriesId}/events`, args);
    export const getEventsByStory = (storyId: number, args: MarvelEventsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelEvent>(`stories/${storyId}/events`, args);
}