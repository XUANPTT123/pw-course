import { APIRequestContext, APIResponse } from "@playwright/test";

export class classDelete {
    request: APIRequestContext;
    baseURL: string = "https://conduit-api.bondaracademy.com/api";

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async deleteComment(token: string, slug: string, commentID: string) {
        const resspone: APIResponse = await this.request.delete(`${this.baseURL}/articles/${slug}/comments/${commentID}`, {
            headers: {
                'authorization': `Token ${token}`
            }
        })
        return resspone;
    }

    async deleteArticle(token: string, slug: string) {
        const respone: APIResponse = await this.request.delete(`${this.baseURL}/articles/${slug}`, {
            headers: {
                'authorization': `Token ${token}`
            }
        })
        return respone;
    }
}