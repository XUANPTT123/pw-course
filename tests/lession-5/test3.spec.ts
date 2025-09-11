import { test } from '@playwright/test';
test('EX3', async ({ page }) => {
    await test.step('Truy cập trang và click todo page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[@href='03-xpath-todo-list.html']");
    })

    await test.step('Thêm mới 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo${i}`);
            await page.click("//button[@id='add-task']");
        }
    })

    await test.step('Delete todo số lẻ', async () => {
        page.on ('dialog', async dialog => dialog.accept());
        for (let i=1; i<=100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo${i}-delete"]`).click();
            } 
        }
    })
    // //chấp nhận confirm dialog khi xóa
    // page.on('dialog', async dialog => dialog.accept());

    // //xóa todo số lẻ
    // for (let i = 1; i <= 100; i += 2) {
    //     await page.click(`//li[span[text()='Todo${i}']]//button[contains(text(),'Delete')]`);
    // }
})
