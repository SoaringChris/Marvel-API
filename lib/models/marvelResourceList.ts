export default class MarvelResourceList<Type>{
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Type[] | undefined;
}