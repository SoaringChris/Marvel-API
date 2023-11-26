import { MarvelRequest } from "./marvelRequest";

class MarvelSeriesRequest implements MarvelRequest {
    title: string | undefined;
    titleStartsWith: string | undefined;
    startYear: number | undefined;
    modifiedSince: Date | undefined;
    comics: number[] | undefined;
    stories: number[] | undefined;
    creators: number[] | undefined;
    characters: number[] | undefined;
    seriesType: MarvelSeriesRequest.SeriesType | undefined;
    contains: MarvelSeriesRequest.Format = MarvelSeriesRequest.Format.comic;
    orderBy: MarvelSeriesRequest.OrderBy = MarvelSeriesRequest.OrderBy.title;
    limit: number | undefined;
    offset: number | undefined;

    toQueryString(): string {
        let str = "?"
        if(this.title){
            str += `title=${this.title}&`;
        }
        if(this.titleStartsWith){
            str += `titleStartsWith=${this.titleStartsWith}&`;
        }
        if(this.startYear){
            str += `startYear=${this.startYear}&`;
        }
        if(this.modifiedSince){
            str += `modifiedSince=${this.modifiedSince.toQueryFormat()}&`;
        }
        if(this.comics){
            str += `comics=${this.comics.join(',')}&`;
        }
        if(this.stories){
            str += `stories=${this.stories.join(',')}&`;
        }
        if(this.creators){
            str += `creators=${this.creators.join(',')}&`;
        }
        if(this.characters){
            str += `characters=${this.characters.join(',')}&`;
        }
        if(this.seriesType){
            str += `seriesType=${this.seriesType}&`;
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

namespace MarvelSeriesRequest{
    export enum SeriesType{
        collection = "collection",
        oneShot = "one%20shot",
        limited = "limited",
        ongoing = "ongoing"
    }

    export enum Format{
        comic = "comic",
        magazine = "magazine",
        tradePaperback = "trade%20paperback",
        hardcover = "hardcover",
        graphicNovel = "graphic%20novel",
        digitalComic = "digital%20comic",
        infiniteComic = "infinite%20comic"
    }

    export enum OrderBy{
        title = "title",
        modified = "modified",
        startYear = "startYear",
        revTitle = "-title",
        revModified = "-modified",
        revStartYear = "-startYear"
    }
}

export default MarvelSeriesRequest