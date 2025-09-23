import {test} from '@playwright/test';

test('demo getbyrole', async({page}) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    await page.getByRole('button',{name: 'Register'}).click();
    await page.waitForTimeout(3000);
})