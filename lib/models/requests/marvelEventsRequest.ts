import { MarvelRequest } from "./marvelRequest";

class MarvelEventsRequest implements MarvelRequest{
    name: string | undefined;
    nameStartsWith: string | undefined;
    modifiedSince: Date | undefined;
    creators: number[] | undefined;
    characters: number[] | undefined;
    series: number[] | undefined;
    comics: number[] | undefined;
    stories: number[] | undefined;
    orderBy: MarvelEventsRequest.OrderBy = MarvelEventsRequest.OrderBy.name
    limit: number | undefined;
    offset: number | undefined;

    toQueryString(): string {
        let str = "?"
        if(this.name){
            str += `name="${this.name}&`
        }
        if(this.nameStartsWith){
            str += `nameStartsWith="${this.nameStartsWith}&`;
        }
        if(this.modifiedSince){
            str += `modifiedSince="${this.modifiedSince.toQueryFormat()}&`;
        }
        if(this.creators){
            str += `creators="${this.creators.join(',')}&`;
        }
        if(this.characters) {
            str += `characters="${this.characters.join(',')}&`;
        }
        if(this.series) {
            str += `series="${this.series.join(',')}&`;
        }
        if(this.comics) {
            str += `comics="${this.comics.join(',')}&`;
        }
        if(this.stories) {
            str += `stories="${this.stories.join(',')}&`;
        }
        if(this.orderBy){
            str += `orderBy="${this.orderBy}&`;
        }
        if(this.limit){
            str += `limit="${this.limit}&`;
        }
        if(this.offset) {
            str += `offset="${this.offset}&`;
        }
        return str;
    }
}

namespace MarvelEventsRequest {
    export enum OrderBy {
        name = "name",
        startDate = "startDate",
        modified = "modified",
        revName = "-name",
        revStartDate = "-startDate",
        revModified = "-modified",
    }
}

export default MarvelEventsRequest;