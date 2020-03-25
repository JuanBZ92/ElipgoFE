export class StoreRequest {
    id?: number;
    address?: string;
    name?: string;

    constructor(rawJson?: any) {
        Object.assign(this, rawJson);
    }
}