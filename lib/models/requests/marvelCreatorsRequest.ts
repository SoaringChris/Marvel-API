import { MarvelRequest } from "./marvelRequest";

class MarvelCreatorsRequest implements MarvelRequest {
    firstName: string | undefined;
    middleName: string | undefined;
    lastName: string | undefined;
    suffix: string | undefined;
    nameStartsWith: string | undefined;
    firstNameStartsWith: string | undefined;
    middleNameStartsWith: string | undefined;
    lastNameStartsWith: string | undefined;
    modifiedSince: Date | undefined;
    comics: number[] | undefined;
    series: number[] | undefined;
    events: number[] | undefined;
    stories: number[] | undefined;
    orderBy: MarvelCreatorsRequest.OrderBy = MarvelCreatorsRequest.OrderBy.lastName;
    limit: number | undefined;
    offset: number | undefined;

    toQueryString(): string {
        let str = "?"
        if(this.firstName){
            str += `firstName=${this.firstName}&`;
        }
        if(this.middleName){
            str += `middleName=${this.middleName}&`;
        }
        if(this.lastName){
            str += `lastName=${this.lastName}&`;
        }
        if(this.suffix){
            str += `suffix=${this.suffix}&`;
        }
        if(this.nameStartsWith){
            str += `nameStartsWith=${this.nameStartsWith}&`;
        }
        if(this.firstNameStartsWith){
            str += `firstNameStartsWith=${this.firstNameStartsWith}&`;
        }
        if(this.middleNameStartsWith){
            str += `middleNameStartsWith=${this.middleNameStartsWith}&`;
        }
        if(this.lastNameStartsWith){
            str = `lastNameStartsWith=${this.lastNameStartsWith}&`
        }
        if(this.modifiedSince){
            str = `modifiedSince=${this.modifiedSince.toQueryFormat()}&`;
        }
        if(this.comics){
            str = `comics=${this.comics.join(',')}&`;
        }
        if(this.series){
            str += `series=${this.series.join(',')}&`;
        }
        if(this.events){
            str += `events=${this.events.join(',')}&`;
        }
        if(this.stories){
            str += `stories=${this.stories.join(',')}&`;
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
        return str;
    }
}

namespace MarvelCreatorsRequest{
    export enum OrderBy{
        lastName = "lastName",
        firstName = "firstName",
        middleName = "middleName",
        suffix = "suffix",
        modified = "modified",
        revLastName = "-lastName",
        revFirstName = "-firstName",
        revMiddleName = "-middleName",
        revSuffix = "-suffix",
        revModified = "-modified",
    }
}

export default MarvelCreatorsRequest