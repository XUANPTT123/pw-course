import {expect, Page, test} from '@playwright/test';

export class PersionalNotes{
    page; 

    constructor(page : Page) {
        this.page = page;
    }

    async navigatetoPersionalNotes(pageName: string) {
        await this.page.click(`${pageName}`);
    }

    async AddPersionalNotes(pageName: string) {
        await this.page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");
        const title = await this.page.locator("//h3[@class='title-news']/a").allTextContents();
        const des = await this.page.locator("//p[@class='description']/a").allTextContents();
        await this.page.goto('https://material.playwrightvn.com/');
        await this.navigatetoPersionalNotes(pageName);
        for (let i = 0; i<10; i++) {
            await this.page.locator("//input[@id='note-title']").fill(title[i]);
            await this.page.locator("//textarea[@id='note-content']").fill(des[i]);
            await this.page.click("//button[@id='add-note']");
        }
    }

    async SearchNote(textSearch: string) {
        await this.page.locator("//input[@id='search']").fill(textSearch);
    }

    VerifyData(textSearch: string) {
        return this.page.locator(`//strong[contains(normalize-space(text()),'${textSearch}')] |  //p[contains(normalize-space(text()),'${textSearch}')]`);
    }

    async VerifyDataContainsKeyWord(textSearch: string) {
        const dataContainsKeyWord  = this.VerifyData(textSearch);
        const soLuong = await dataContainsKeyWord.count();
        for(let i = 0; i< soLuong; i++) {
            const text = await dataContainsKeyWord.nth(i).textContent();
            await expect(text?.toLowerCase()).toContain(textSearch.toLowerCase());
        }
    }
}