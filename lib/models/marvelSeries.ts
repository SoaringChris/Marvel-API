import MarvelUrl from "./marvelUrl";
import MarvelImage from "./marvelImage";
import MarvelResourceList from "./marvelResourceList";
import MarvelComic from "./marvelComic";
import MarvelStory from "./marvelStory";
import MarvelEvent from "./marvelEvent";
import MarvelCreator from "./marvelCreator";
import MarvelSummary from "./marvelSummary";

export default class MarvelSeries{
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    resourceURI: string | undefined;
    urls: MarvelUrl[] | undefined;
    startYear: number | undefined;
    endYear: number | undefined;
    rating: string | undefined;
    modified: Date | undefined;
    thumbnail: MarvelImage | undefined;
    comics: MarvelResourceList<MarvelComic> | undefined;
    stories: MarvelResourceList<MarvelStory> | undefined;
    events: MarvelResourceList<MarvelEvent> | undefined;
    creators: MarvelResourceList<MarvelCreator> | undefined;
    next: MarvelSummary<MarvelSeries> | undefined;
    previous: MarvelSummary<MarvelSeries> | undefined;
}