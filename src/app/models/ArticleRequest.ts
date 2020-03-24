export class ArticleRequest {
    id?: number;
    description: string;
    name: string;
    price: number;
    total_in_shelf: number;
    total_in_vault: number;
    store_id: number;

    constructor(rawJson?: any) {
        Object.assign(this, rawJson);
    }
}