export default class MarvelContainer<Type>{
    offset: number | undefined;
    limit: number | undefined;
    total: number | undefined;
    count: number | undefined;
    results: Type[] | undefined;
}