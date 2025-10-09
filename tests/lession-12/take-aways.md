1. POM API
1.1. File .ts

import { APIRequestContext } from "@playwright/test";

export class tenClass {
    request: APIRequestContext;
    url: string = "link trang";

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async tenHam(bien1: string, bien2: string, bien3: string) {
        const respone = await this.request.post(`${this.url}`,{
                    data: {
                        //payload
                        user : {email: bien1, password: bien2, username: bien3}
                    }
                });
        return respone;
    }
}

2.2. file .spec.ts

mport {APIResponse, expect, test} from '@playwright/test';
import { tenClass } from 'xpath cua file .ts';

const bien1 = 'aabbcc202510@gmail.com';
const bien2 = '12345678';
const bien3 = 'aabbcc202510';

let api = tenClass;

test('demo', async({request}) => {
    const api = new tenClass(request);
    const res: APIResponse = await api.tenHam(bien1, bien2, bien3);

    //verify status code
    const sttCode = res.status();
    expect(sttCode).toBe(201);

    //verify data respone
    const body = await res.json();
    const actualEmail = body.user.email;
    const actualUseName = body.user.username;
    expect(actualEmail).toBe(email);
    expect(actualUseName).toBe(userName);
})

2. POM Manage: Dùng để quản lý nhiều page object

