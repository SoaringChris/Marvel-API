import MarvelCharacter from "../models/marvelCharacter";
import MarvelCharactersRequest from "../models/requests/marvelCharacterRequest";
import { MarvelEndpoints } from "./marvelEndpoints";

export module CharacterEndpoints{
    export const getCharacters = (args: MarvelCharactersRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCharacter>('characters', args);
    export const getCharacterById = (id: number) => MarvelEndpoints.get<MarvelCharacter>(`characters/${id}`)
    export const getCharactersByComic = (comidId: number, args: MarvelCharactersRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCharacter>(`comics/${comidId}/characters`, args);
    export const getCharactersByEvent = (eventId: number, args: MarvelCharactersRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCharacter>(`events/${eventId}/characters`, args);
    export const getCharactersBySeries = (seriesId: number, args: MarvelCharactersRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCharacter>(`series/${seriesId}/characters`, args);
    export const getCharactersByStory = (storyId: number, args: MarvelCharactersRequest | undefined = undefined) => MarvelEndpoints.get<MarvelCharacter>(`stories/${storyId}/characters`, args);
}