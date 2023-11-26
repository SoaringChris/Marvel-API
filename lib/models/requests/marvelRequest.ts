import MarvelCharactersRequest from "./marvelCharacterRequest"
import MarvelComicsRequest from "./marvelComicsRequest"
import MarvelCreatorsRequest from "./marvelCreatorsRequest"
import MarvelEventsRequest from "./marvelEventsRequest"
import MarvelSeriesRequest from "./marvelSeriesRequest"
import MarvelStoriesRequest from "./marvelStoriesRequest"

export interface MarvelRequest{
    toQueryString():string
}

export module MarvelRequests{
    export const CharactersRequest = MarvelCharactersRequest;
    export const ComicsRequest = MarvelComicsRequest;
    export const CreatorsRequest = MarvelCreatorsRequest;
    export const EventsRequest = MarvelEventsRequest;
    export const SeriesRequest = MarvelSeriesRequest;
    export const StoriesRequest = MarvelStoriesRequest;
}