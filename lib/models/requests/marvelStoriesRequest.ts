import { MarvelRequest } from "./marvelRequest";

class MarvelStoriesRequest implements MarvelRequest{
    modifiedSince: Date | undefined;
    comics: number[] | undefined;
    series: number[] | undefined;
    events: number[] | undefined;
    creators: number[] | undefined;
    characters: number[] | undefined;
    orderBy: MarvelStoriesRequest.OrderBy = MarvelStoriesRequest.OrderBy.id
    limit: number | undefined;
    offset: number | undefined;

    toQueryString(): string{
        let str = "?"
        if(this.modifiedSince){
            str += `modifiedSince=${this.modifiedSince.toQueryFormat()}&`;
        }
        if(this.comics){
            str += `comics=${this.comics.join(',')}&`;
        }
        if(this.series){
            str += `series=${this.series.join(',')}&`;
        }
        if(this.events){
            str += `events=${this.events.join(',')}&`;
        }
        if(this.creators){
            str += `creators=${this.creators.join(',')}&`;
        }
        if(this.characters){
            str += `characters=${this.characters.join(',')}&`;
        }
        if(this.orderBy){
            str += `orderBy=${this.orderBy}&`;
        }
        if(this.limit){
            str += `limit=${this.limit}&`;
        }
        if(this.offset){
            str += `offset=${this.offset}&`;
        }

        return str
    }
}

namespace MarvelStoriesRequest{
    export enum OrderBy{
        id = "id",
        modified = "modified",
        revId = "-id",
        revModified = "-modified",
    }
}

export default MarvelStoriesRequest