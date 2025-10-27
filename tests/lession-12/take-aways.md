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
-> nhược điểm: Làm phức tạp code nếu chức năng nhỏ, không tận dụng được extend, bị điều hướng nhiều quá (const chucnang1 = pom.classMot();
    await chucnang1.functionClass1();)
-> ưu điểm: đỡ tốn bộ nhớ hơn, vì dùng đêns page nào mới khoửi tạo page đó

2.1. file1.ts

export class classMot {
    page;
    xpathLogo;

    constructor(page) {
        this.page = page
    }

    async functionClass1() {
        //logiccode
    }
}

2.2. file2.ts

export class classHai {
    page;
    
    constructor(page) {
        this.page = page
    }
    
    async functionClass2(bien1: string, bien2: string) {
        //logic code
    }
}

2.3. filePomManager.ts

export class PomManager {
    page;
    
    constructor(page) {
        this.page = page
    }

    getClassMot() {
        return new classMot(this.page);
    }

    getClassHai() {
        return new classHai(this.page);
    }
}

2.4. file test.spec.ts

import {test} from '@playwright';
import {PomManager} from 'xpath file PomManager';

test('pom manager', async({page}) => {
    const pom = new PomManger(page);

    const chucnang1 = pom.classMot();
    await chucnang1.functionClass1();

    const chucnang2 = pom.classHai();
    await chucnang2.functionClass2();
})

3. Return Pom from another Pom: Các method của 1 page object trả về page object khác, thường áp dụng cho testcase liên quan đến nhiều màn hình
-> Nhược điểm: Khi xảy ra lỗi thì khó debug

3.1. file.ts
import {page} from '@playwrigth';

export class classPomMot {
    page;
    xpathLogo;
    xpathBtnCard;

    constructor(page) {
        this.page = page
    }

    async functionClass1() {
        //logiccode
    }

    async CickbuttonCart() {
        this.page.locator(this.xpathBtnCart).click;
        return new classPomHai(this.page)
    }
}

3.2. file2.ts

import {page} from '@playwrigth';

export class classPomHai {
    page;
    
    constructor(page) {
        this.page = page
    }
    
    async getListItem() {
        //logic code
    }
}

3.3. file3.ts


export class classPomBa {
    page;
    xpathbien1;
    xpathbien2;
    xpathBtnLogin
    
    constructor(page) {
        this.page = page
    }
    
    async functionClass2(bien1: string, bien2: string) {
        this.page.locator(this.xpathbien1).fill(bien1);
        this.page.locator(this.xpathbien2).fill(bien2);
        this.page.locator(this.xpathBtnLogin).click();
    }
}


