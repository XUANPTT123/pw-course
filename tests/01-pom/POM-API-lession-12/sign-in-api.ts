import { APIRequestContext, APIResponse } from "@playwright/test";

export class SignInAPI {
    request: APIRequestContext;
    baseURL: string = "https://conduit-api.bondaracademy.com/api";

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async signIn(email: string, passWord: string) {
        const respone: APIResponse = await this.request.post(`${this.baseURL}/users/login`, {
                data: {
                    user: {email: `${email}`, password: `${passWord}`}
                }
            });

        return respone;
    }
}