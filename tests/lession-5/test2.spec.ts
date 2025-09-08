import { test } from '@playwright/test';
test('EX2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href = '02-xpath-product-page.html']");

    //thêm sp1
    await page.locator('button[data-product-id="1"]').dblclick();

    //thêm sq2
    await page.locator('button[data-product-id="2"]').dblclick();
    await page.locator('button[data-product-id="2"]').click();

    //thêm sp3
    await page.locator('button[data-product-id="3"]').click();

})
