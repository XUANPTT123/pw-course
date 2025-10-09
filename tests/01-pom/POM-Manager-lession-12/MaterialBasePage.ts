import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoPageMaterial() {
        await this.page.goto('https://material.playwrightvn.com/');
    }
}