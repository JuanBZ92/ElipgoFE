export class LoginModel{
    success: boolean;
    role: string;

    constructor(rawJson?: any) {
        Object.assign(this, rawJson);
    }
}