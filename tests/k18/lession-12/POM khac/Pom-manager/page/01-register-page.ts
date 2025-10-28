import {Page, test} from '@playwright/test';

export class registerPage {
    page: Page;
    baseURL: string = 'https://material.playwrightvn.com/';

    constructor(page: Page) {
        this.page = page
    }
    
    async registerInfo(userName: string, email: string) {
        await this.page.goto(`${this.baseURL}/01-xpath-register-page.html`);
        await this.page.locator('#username').fill(userName);
        await this.page.locator('#email').fill(email);
        await this.page.getByRole('button', {name: 'Register'}).click();
    }
}