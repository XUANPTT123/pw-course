import { test } from '@playwright/test';
test('EX3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='03-xpath-todo-list.html']");

    //thêm 100 todo
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo${i}`);
        await page.click("//button[@id='add-task']");
    }

    //chấp nhận confirm dialog khi xóa
    page.on('dialog', async dialog => dialog.accept());

    //xóa todo số lẻ
    for (let i = 1; i <= 100; i += 2) {
        await page.click(`//li[span[text()='Todo${i}']]//button[contains(text(),'Delete')]`);
    }
})
