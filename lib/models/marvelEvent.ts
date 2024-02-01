import MarvelUrl from "./marvelUrl";
import MarvelImage from "./marvelImage";
import MarvelResourceList from "./marvelResourceList";
import MarvelComic from "./marvelComic";
import MarvelStory from "./marvelStory";
import MarvelSeries from "./marvelSeries";
import MarvelCharacter from "./marvelCharacter";
import MarvelCreator from "./marvelCreator";
import MarvelSummary from "./marvelSummary";

export default class MarvelEvent{
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
    resourceURI: string | undefined;
    urls: MarvelUrl[] | undefined;
    modified: Date | undefined;
    start: Date | undefined;
    end: Date | undefined;
    thumbnail: MarvelImage | undefined;
    comics: MarvelResourceList<MarvelComic> | undefined;
    stories: MarvelResourceList<MarvelStory> | undefined;
    series: MarvelResourceList<MarvelSeries> | undefined;
    characters: MarvelResourceList<MarvelCharacter> | undefined;
    creators: MarvelResourceList<MarvelCreator> | undefined;
    next:  MarvelSummary<MarvelEvent> | undefined;
    previous: MarvelSummary<MarvelEvent> | undefined;
}