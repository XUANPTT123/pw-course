import { APIRequestContext } from "@playwright/test";

export class SignUpAPI {
    request: APIRequestContext;
    baseURL: string = "https://conduit-api.bondaracademy.com/api";
    endpoint: string = "/users";

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async signUp(email: string, passWord: string, userName: string) {
        const respone = await this.request.post(`${this.baseURL}${this.endpoint}`,{
                    data: {
                        user : {email: email, password: passWord, username: userName}
                    }
                });
        return respone;
    }
}



