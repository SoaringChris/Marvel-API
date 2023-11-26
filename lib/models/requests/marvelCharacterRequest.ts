import { MarvelRequest } from "./marvelRequest";

    class MarvelCharactersRequest implements MarvelRequest{
        name: string | undefined;
        nameStartsWith: string | undefined;
        modifiedSince: Date | undefined;
        comics: number[] | undefined;
        series: number[] | undefined;
        events: number[] | undefined;
        stories: number[] | undefined;
        orderBy: MarvelCharactersRequest.OrderBy = MarvelCharactersRequest.OrderBy.name;
        limit: number | undefined;
        offset: number | undefined;

        toQueryString(): string {
            let str = "?";
            if(this.name){
                str += `name="${this.name}&`
            }
            if(this.nameStartsWith){
                str += `nameStartsWith=${this.nameStartsWith}&`
            }
            if(this.modifiedSince){
                str += `modifiedSince="${this.modifiedSince.toQueryFormat()}&`
            }
            if(this.comics){
                str += `comics="${this.comics.join(',')}&`
            }
            if(this.series){
                str += `series="${this.series.join(',')}&`
            }
            if(this.events) {
                str += `events="${this.events.join(',')}&`
            }
            if(this.stories){
                str += `stories="${this.stories.join(',')}&`
            }
            if(this.orderBy){
                str += `orderBy=${this.orderBy}&`
            }
            if(this.limit){
                str += `limit="${this.limit}&`
            }
            if(this.offset){
                str += `offset="${this.offset}&`
            }
            return str;
        }

    }

    namespace MarvelCharactersRequest{
        export enum OrderBy{
            name = "name",
            revName = "-name",
            modified = "modified",
            revModified = "-modified"
        }
    }

    export default MarvelCharactersRequest;

   