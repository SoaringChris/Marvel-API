import MarvelComicsRequest from '../models/requests/marvelComicsRequest';
import {MarvelEndpoints} from './marvelEndpoints';
import MarvelComic from '../models/marvelComic';

export module ComicsEndpoints{
    export const getComics = (args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>('comics', args);
    export const getComicsById = (id: number) => MarvelEndpoints.get<MarvelComic>(`comics/${id}`);
    export const getComicsByCharacter = (characterId: number, args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>(`characters/${characterId}/comics`, args);
    export const getComicsByCreator = (creatorId: number, args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>(`creators/${creatorId}/comics`, args);
    export const getComicsByEvent = (eventId: number, args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>(`events/${eventId}/comics`, args);
    export const getComicsBySeries = (seriesId: number, args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>(`series/${seriesId}/comics`, args);
    export const getComicsByStory = (storyId: number, args: MarvelComicsRequest | undefined = undefined) => MarvelEndpoints.get<MarvelComic>(`stories/${storyId}/comics`, args);
}
