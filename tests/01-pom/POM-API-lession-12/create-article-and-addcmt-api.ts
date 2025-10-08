import { APIRequestContext, APIResponse } from "@playwright/test";

export class classCreateArticle {
    request: APIRequestContext;
    baseURL: string = "https://conduit-api.bondaracademy.com/api";

    constructor(request: APIRequestContext){
        this.request = request
    }

    async createArticle(token: string, title: string, description: string, body: string, tagList: string[]) {
        const respone: APIResponse = await this.request.post(`${this.baseURL}/articles/`, {
            headers: {
                'authorization': `Token ${token}`
            },
            data: {
                article: {title: title, description: description, body: body, tagList: tagList}
            }
        })
        return respone;
    }

    async addComment(token: string, slug: string, comment: string) {
        const respone: APIResponse = await this.request.post(`${this.baseURL}/articles/${slug}/comments`,{
            headers: {
                'authorization': `Token ${token}`
            }, 
            data: {
                comment: {body: comment}
            }
        });
        return respone;
    }
}