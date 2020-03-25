export class StoresResponseModel {
    stores: StoresInformation[];
    success: boolean;
    total_elements: number;

    constructor(rawJson?: any) {
        Object.assign(this, rawJson);
    }
}

export class StoresInformation {
    id: number;
    address: string;
    name: string;

}