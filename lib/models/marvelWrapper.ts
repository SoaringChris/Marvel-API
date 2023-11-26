import MarvelContainer from "./marvelContainer";

export default class MarvelWrapper<Type>{
    code: number | undefined;
    status: string | undefined;
    data: MarvelContainer<Type> | undefined;
    etag: string | undefined;
    copyright: string | undefined;
    attributionText: string | undefined;
    attributionsHTML: string | undefined;
}