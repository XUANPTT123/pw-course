import { test } from '@playwright/test';
test('EX4', async ({ page }) => {
    //truy cập trang báo
    await page.goto('https://vnexpress.net/khoa-hoc');
    const title = await page.locator("//h3[@class='title-news']/a").allTextContents();
    const description = await page.locator("//p[@class='description']/a").allTextContents();

    //truy cập trang playwight
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='04-xpath-personal-notes.html']");

    //thêm mới note
    for (let i = 0; i < 10; i++) {
        await page.locator("//input[@id='note-title']").fill(title[i]);
        await page.locator("//textarea[@id='note-content']").fill(description[i]);
        await page.click("//button[@id='add-note']");
    }

    //search theo tiêu đề bài báo bất kỳ
    await page.locator("//input[@id='search']").pressSequentially(title[1], {
        delay: 100,
    });
})