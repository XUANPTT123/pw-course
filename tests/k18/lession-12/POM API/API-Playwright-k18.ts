import { APIRequestContext } from '@playwright/test';

export class userManagement {
    request: APIRequestContext;
    baseURL: string = 'https://material.playwrightvn.com/api/user-management/v1';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async Login(email: string, password: string) {
        const respone = await this.request.post(`${this.baseURL}/login.php`, {
            data: {
                "email": email,
                "password": password
            }
        })
        return respone;
    }

    async CreateUser(token: string, name: string, email_user: string) {
        const respone = await this.request.post(`${this.baseURL}/users.php`, {
            headers: {
                "Authorization": `Bearer ${token}`}, 
            data: {
                "name": name,
                "email": email_user,
                "password": "password",
                "facebook": "https://facebook.com/newuser",
                "avatar": "https://i.pravatar.cc/150?img=20",
                "hobbies": "Reading, Coding",
                "role": "user"
            }
        });
        return respone;
    }

    async getList(token: string){
        const respone = await this.request.get(`${this.baseURL}/users.php`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return respone;
    }

    async deleteUser(token: string, idUser: string) {
        const respone = await this.request.delete(`${this.baseURL}/users.php`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
                "id": `${idUser}`
            }
        });
        return respone;
    }
}