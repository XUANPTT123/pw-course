import {Page, test} from '@playwright/test';
import path from 'path';

export class LoginPage {
    page: Page; 
    xpathUserName = "//input[@id='user_login']";
    xpathPassWord = "//input[@id='user_pass']";
    xpathLogin = "//input[@id='wp-submit']";

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    }

    async Login(userName: string, passWord: string) {
        await this.page.locator(this.xpathUserName).fill(userName);
        await this.page.locator(this.xpathPassWord).fill(passWord);
        await this.page.locator(this.xpathLogin).click();
        // return new homePage(this.page);
    }
}