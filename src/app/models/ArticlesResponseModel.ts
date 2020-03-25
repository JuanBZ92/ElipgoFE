export class ArticlesResponseModel {
    articles: ArticlesInformation[];
    success: boolean;
    total_elements: number;

    constructor(rawJson?: any) {
        Object.assign(this, rawJson);
    }
}

export class ArticlesInformation {
    id: number;
    description: string;
    name: string;
    price: number;
    total_in_shelf: number;
    total_in_vault: number;
    store_Id: string;
}