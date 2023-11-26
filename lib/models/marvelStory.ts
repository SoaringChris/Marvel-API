import MarvelImage from "./marvelImage";
import MarvelResourceList from "./marvelResourceList";
import MarvelComic from "./marvelComic";
import MarvelSeries from "./marvelSeries";
import MarvelEvent from "./marvelEvent";
import MarvelCharacter from "./marvelCharacter";
import MarvelCreator from "./marvelCreator";

export default class MarvelStory{
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    resourceURI: string | undefined;
    type: string | undefined;
    modified: Date | undefined;
    thumbnail: MarvelImage | undefined;
    comics: MarvelResourceList<MarvelComic> | undefined;
    series: MarvelResourceList<MarvelSeries> | undefined;
    events: MarvelResourceList<MarvelEvent> | undefined;
    characters: MarvelResourceList<MarvelCharacter> | undefined;
    creators: MarvelResourceList<MarvelCreator> | undefined;
    originalIssue: MarvelComic | undefined;
}