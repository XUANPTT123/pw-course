import { test } from '@playwright/test';
test('EX2', async ({ page }) => {
    await test.step('Goto link', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click product page', async () => {
        await page.click("//a[@href = '02-xpath-product-page.html']");
    })

    await test.step('add product1: 2 item', async () => {
        await page.locator('button[data-product-id="1"]').dblclick();
    })

    await test.step('add product2: 3 item', async () => {
        await page.locator('button[data-product-id="2"]').click({ clickCount: 3 });
    })

    await test.step('add product3: 1 item', async () => {
        await page.locator('button[data-product-id="3"]').click();
    })
})
