import MarvelSeries from "../models/marvelSeries";
import MarvelSeriesRequest from "../models/requests/marvelSeriesRequest";
import { MarvelEndpoints } from "./marvelEndpoints";

export module SeriesEndpoints{
    export const getSeries = (args: MarvelSeriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelSeries>(`series`, args);
    export const getSeriesById = (id: number) => MarvelEndpoints.get<MarvelSeries>(`series/${id}`);
    export const getSeriesByCharacter = (characterId: number, args: MarvelSeriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelSeries>(`characters/${characterId}/series`, args);
    export const getSeriesByCreator = (creatorId: number, args: MarvelSeriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelSeries>(`creators/${creatorId}/series`, args);
    export const getSeriesByEvent = (eventId: number, args: MarvelSeriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelSeries>(`events/${eventId}/series`, args);
    export const getSeriesByStory = (storyId: number, args: MarvelSeriesRequest | undefined = undefined) => MarvelEndpoints.get<MarvelSeries>(`stories/${storyId}/series`, args);
}