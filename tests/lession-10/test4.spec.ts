import {test} from '@playwright/test';
import { PersionalNotes } from '../01-pom/PersionalNotes';

test ('PersionalNote', async({page}) => {
    const persionalNote = new PersionalNotes(page);

    await test.step('Add persional notes', async() => {
        
        await persionalNote.AddPersionalNotes();
        // await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");
        // const title = await page.locator("(//h3[@class='title-news']/a)[position()<=10]").allTextContents();
        // const des = await page.locator("(//p[@class='description']/a)[position()<=10]").allTextContents();

        // await persionalNote.navigatetoPersionalNotes();
        // for (let i = 1; i<=10; i++) {
        //     await page.locator("//input[@id='note-title']").fill(title[i]);
        //     await page.locator("//textarea[@id='note-content']").fill(des[i]);
        //     await page.click("//button[@id='add-note']");
        // }
    })
})