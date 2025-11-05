import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = "//a[contains(text(),'Register Page')]";
        this.xpathProductPage = "//a[contains(text(),'Product page')]";
        this.cssTodoPage = "//a[contains(text(),'Todo page')]";
        this.personalNote = page.locator("//a[contains(text(),'Personal notes')]");
    }

    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async gotoPage(pageName: string) {
        await this.page.click(`//a[contains(text(),'${pageName}')]`);
    }
}