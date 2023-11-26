import MarvelUrl from "./marvelUrl";
import MarvelImage from "./marvelImage";
import MarvelResourceList from "./marvelResourceList";
import MarvelComic from "./marvelComic";
import MarvelStory from "./marvelStory";
import MarvelEvent from "./marvelEvent";
import MarvelSeries from "./marvelSeries";

export default class MarvelCharacter{
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    modified: Date | undefined;
    resourceURI: string | undefined;
    urls: MarvelUrl[] | undefined;
    thumbnail: MarvelImage | undefined;
    comics: MarvelResourceList<MarvelComic> | undefined;
    stories: MarvelResourceList<MarvelStory> | undefined;
    events: MarvelResourceList<MarvelEvent> | undefined;
    series: MarvelResourceList<MarvelSeries> | undefined;
}