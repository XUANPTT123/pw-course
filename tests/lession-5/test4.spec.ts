import { test } from '@playwright/test';
import { assert } from 'console';

test('EX4', async ({ page }) => {
    let title : string[];
    let description : string[];

    await test.step('truy cập trang báo, lấy title và description', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc');
        title = await page.locator("//h3[@class='title-news']/a").allTextContents();
        description = await page.locator("//p[@class='description']/a").allTextContents();
    })

    await test.step ('truy cập link và click persional note ', async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    })

    await test.step ('thêm title và description vào persional note', async () => {
        for (let i = 0; i < 8; i++) {
        await page.locator("//input[@id='note-title']").fill(title[i]);
        await page.locator("//textarea[@id='note-content']").fill(description[i]);
        await page.click("//button[@id='add-note']");
        }
    })

    await test.step('Tìm kiếm theo tiêu đề bất kỳ', async() => {
        await page.locator("//input[@id='search']").fill(title[1]);
    })
})