import {test} from '@playwright/test';

test('fixture context', async({context}) => {
    const page1 = await context.newPage();
    await page1.goto('https://material.playwrightvn.com/');
    const page2 = await context.newPage();
    await page2.goto('https://e-commerce-dev.betterbytesvn.com/');
})

test('fixture browser', async({ browser }) => {
    const browser1 = await browser.newContext();
    const page1 = await browser1.newPage();
    await page1.goto('https://material.playwrightvn.com/');

    const browser2 = await browser.newContext();
    const page2 = await browser2.newPage();
    await page2.goto('https://e-commerce-dev.betterbytesvn.com/');

})