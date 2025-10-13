import {test, expect} from '@playwright/test';

test('compare', async({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveScreenshot("Material.png");
})

test ('compare2', async({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
    await expect(page).toHaveScreenshot("register.png");
})

test ('mask compage', async({page}) => {
    const xpathAds = page.locator("//div[@id='ads-here']");
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveScreenshot("mask-material.png", {
        mask: [xpathAds],
        maskColor: '#000000'
    })
})