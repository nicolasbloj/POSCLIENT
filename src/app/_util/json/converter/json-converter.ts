export interface JsonConverter<T> {
    convertJsonToObjectsArray(_data: any[]): T[];
}
