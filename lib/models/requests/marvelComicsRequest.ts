import { MarvelRequest } from "./marvelRequest";

class MarvelComicsRequest implements MarvelRequest {
    format: MarvelComicsRequest.Format | undefined;
    formatType: MarvelComicsRequest.FormatType | undefined;
    noVariants: boolean | undefined;
    dateDescriptor: MarvelComicsRequest.DateDescriptor | undefined;
    dateRange: Date[]| undefined;
    title: string | undefined;
    titleStartsWith: string | undefined;
    startYear: number | undefined;
    issueNumber: number | undefined;
    diamondCode: string | undefined;
    digitalId: number | undefined;
    upc: string | undefined;
    isbn: string | undefined;
    ean: string | undefined;
    issn: string | undefined;
    hasDigitalIssue: boolean | undefined;
    modifiedSince: Date | undefined;
    creators: [number] | undefined;
    characters: [number] | undefined;
    series: [number] | undefined;
    events: [number] | undefined;
    stories: [number] | undefined;
    sharedAppearances: [number] | undefined;
    collaborators: [number] | undefined;
    orderBy: MarvelComicsRequest.OrderBy = MarvelComicsRequest.OrderBy.focDate;
    limit: [number] | undefined;
    offset: [number] | undefined;

    toQueryString(): string {
        let str = "?";
        if(this.format){
            str += `format=${this.format}&`
        }
        if(this.formatType){
            str += `formatType=${this.formatType}&`
        }
        if(this.noVariants){
            str += `noVariants=${this.noVariants}&`
        }
        if(this.dateDescriptor){
            str += `dateDescriptor=${this.dateDescriptor}&`
        }
        if(this.dateRange && this.dateRange.length == 2){
            str += `dateRange=${this.dateRange.map(date => date.toQueryFormat()).join(',')}&`
        }
        if(this.title){
            str += `title=${this.title}&`
        }
        if(this.titleStartsWith){
            str += `titleStartsWith=${this.titleStartsWith}&`
        }
        if(this.startYear){
            str += `startYear=${this.startYear}&`
        }
        if(this.issueNumber){
            str += `issueNumber=${this.issueNumber}&`
        }
        if(this.diamondCode){
            str += `diamondCode=${this.diamondCode}&`
        }
        if(this.upc){
            str += `upc=${this.upc}&`
        }
        if(this.isbn){
            str += `isbn=${this.isbn}&`
        }
        if(this.ean){
            str += `ean=${this.ean}&`
        }
        if(this.issn){
            str += `issn=${this.issn}&`
        }
        if(this.hasDigitalIssue){
            str += `hasDigitalIssue=${this.hasDigitalIssue}&`
        }
        if(this.modifiedSince){
            str += `modifiedSince=${this.modifiedSince.toQueryFormat()}&`
        }
        if(this.creators){
            str += `creators=${this.creators.join(',')}&`
        }
        if(this.characters) {
            str += `characters=${this.characters.join(',')}&`
        }
        if(this.series) {
            str += `series=${this.series.join(',')}&`
        }
        if(this.events){
            str += `events=${this.events.join(',')}&`
        }
        if(this.stories){
            str += `stories=${this.stories.join(',')}&`
        }
        if(this.sharedAppearances){
            str += `sharedAccessory=${this.sharedAppearances.join(',')}&`
        }
        if(this.collaborators){
            str += `collaborators=${this.collaborators.join(',')}&`
        }
        if(this.orderBy){
            str += `orderBy=${this.orderBy}&`
        }
        if(this.limit){
            str += `limit=${this.limit}&`
        }
        if(this.offset){
            str += `offset=${this.offset}&`
        }
        return str
    }
}

namespace MarvelComicsRequest{
    export enum Format{
        comic = "comic",
        tradePaperback = "trade%20paperback",
        hardcover = "hardcover",
        digest = "digest",
        graphicNovel = "graphic%20novel",
        digitalComic = "digital%20comic",
        infiniteComic = "infinite%20comic"
    }

    export enum FormatType{
        comic = "comic",
        collections = "collection"
    }

    export enum DateDescriptor{
        lastWeek = "lastWeek",
        thisWeek = "thisWeek",
        nextWeek = "nextWeek",
        thisMonth = "thisMonth"
    }

    export enum OrderBy{
        focDate = "focDate",
        onSaleDate = "onsaleDate",
        title = "title",
        issueNumber = "issueNumber",
        modified = "modified",
        revFocDate = "-focDate",
        revOnSaleDate = "-onsaleDate",
        revTitle = "-title",
        revIssueNumber = "-issueNumber",
        revModified = "-modified"

    }
}

export default MarvelComicsRequest