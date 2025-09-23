import { test, expect } from '@playwright/test';

test.describe('MEDIA-Media', () => {
    test('@MEDIA_FILES_001 - Media - upload file success', async ({ page }) => {

        await test.step('login and click menu Media/Library', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
            await page.locator("//input[@id='user_login']").fill('k17-quynh-nga');
            await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');
            await page.locator("//input[@id='wp-submit']").click();
            await page.locator("//div[text()='Media']").click();
            await page.locator("//a[text()='Library']").click();
        })

        await test.step('Upload data', async () => {
            await page.locator("//a[text()='Add Media File' and @role='button']").click();
            await page.setInputFiles('input[type="file"]', 'tests/lession-8/xuan-lession8.txt');
        })

        await test.step('Check upload file success', async () => {
            const fistFile = page.locator("//div[@class='filename']//div[contains(text(),'xuan-lession8')]").first();
            await expect(fistFile).toBeVisible();
        })

        // await test.step('F5 page', async () => {
        //     await page.reload();
        // })

        await test.step('Check file show in media library', async () => {
            const fistFile1 = page.locator("//div[@class='filename']//div[contains(text(),'xuan-lession8')]").first();
            await expect(fistFile1).toBeVisible();
        })

        await test.step('Delete data', async () => {
            const fistFile2 = page.locator("//h2[text()='Media list']/following::li[contains(@aria-label, 'xuan-lession')]").first();
            await expect(fistFile2).toBeVisible();
            await fistFile2.click();
            page.once('dialog', async dialog => dialog.accept());
            await page.locator("//button[text()='Delete permanently' and not(@disabled)]").click();
        })
    });
})