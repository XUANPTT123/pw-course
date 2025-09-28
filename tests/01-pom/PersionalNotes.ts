import {Page, test} from '@playwright/test';
import { MaterialBasePage } from './MaterialBasePage';

export class PersionalNotes extends MaterialBasePage {
    constructor(page : Page) {
        super(page);
    }

    async navigatetoPersionalNotes() {
        await this.openMaterialPage();
        await this.gotoPage("Personal notes");
    }

    async AddPersionalNotes() {
        await this.page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", { waitUntil: 'domcontentloaded', timeout: 60000 });
        const title = await this.page.locator("(//h3[@class='title-news']/a)[position()<=10]").allTextContents();
        const des = await this.page.locator("(//p[@class='description']/a)[position()<=10]").allTextContents();

        await this.navigatetoPersionalNotes();
        for (let i = 0; i<10; i++) {
            await this.page.locator("//input[@id='note-title']").fill(title[i]);
            await this.page.locator("//textarea[@id='note-content']").fill(des[i]);
            await this.page.click("//button[@id='add-note']");
        }
    }
}