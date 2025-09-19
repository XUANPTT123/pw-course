import { expect, test } from '@playwright/test';

test.describe('AUTH-Authentication', async () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    test('@AUTH_001-Login success', async ({ page }) => {

        await test.step('Nhập đúng username và pass', async () => {
            await page.locator("//input[@id='user_login']").fill('k17-quynh-nga');
            await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        })

        await test.step('Check username and password được điền đúng', async () => {
            await expect(page.locator("//input[@id='user_login']")).toHaveValue('k17-quynh-nga');
            await expect(page.locator("//input[@id='user_pass']")).toHaveValue('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        })

        await test.step("Click button Login", async () => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        await test.step('Check Login success, link url = /wp-admin', async () => {
            await expect(page).toHaveURL(/.*\/wp-admin/);
        })

        await test.step('Check heading h1 show "Dashboard"', async () => {
            await expect(page.locator('//h1').nth(0)).toHaveText('Dashboard');
        })

        await test.step('Check h1 and h2 show "At a Glance" và "Activity"', async () => {
            await expect(page.locator('//h2')).toContainText(['At a Glance', 'Activity']);
        })

    })

    test('@AUTH_002-Login fail', async ({ page }) => {

        await test.step('Input fail username and pass', async () => {
            await page.locator("//input[@id='user_login']").fill('k17-quynh-nga1');
            await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        })

        await test.step('Check username and pass are incorrect', async () => {
            await expect(page.locator("//input[@id='user_login']")).toHaveValue('k17-quynh-nga1');
            await expect(page.locator("//input[@id='user_pass']")).toHaveValue('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        })

        await test.step('Click button Login', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        })

        await test.step('Check show error', async () => {
            await expect(page.locator("//div[@id='login_error']")).toHaveText(/Error: The username .* is not registered on this site\. If you are unsure of your username, try your email address instead\./)
        })
    });
})
