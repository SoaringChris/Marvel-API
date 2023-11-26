import MarvelUrl from "./marvelUrl";
import MarvelImage from "./marvelImage";
import MarvelResourceList from "./marvelResourceList";
import MarvelSeries from "./marvelSeries";
import MarvelStory from "./marvelStory";
import MarvelComic from "./marvelComic";
import MarvelEvent from "./marvelEvent";

export default class MarvelCreator{
    id: number | undefined;
    firstName: string | undefined;
    middleName: string | undefined;
    lastName: string | undefined;
    suffix: string | undefined;
    fullName: string | undefined;
    modified: Date | undefined;
    resourceURI: string | undefined;
    urls: MarvelUrl[] | undefined;
    thumbnail: MarvelImage | undefined;
    series: MarvelResourceList<MarvelSeries> | undefined;
    stories: MarvelResourceList<MarvelStory> | undefined;
    comics: MarvelResourceList<MarvelComic> | undefined;
    events: MarvelResourceList<MarvelEvent> | undefined;

}