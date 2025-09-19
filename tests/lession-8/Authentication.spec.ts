import { expect, test } from '@playwright/test';

test.describe('AUTH-Authentication', async () => {

    test.beforeEach('login', async ({ page }) => {
        //truy cập trang web
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    test('@AUTH_001-Login success', async ({ page }) => {
        //nhập đúng username và password
        await page.locator("//input[@id='user_login']").fill('k17-quynh-nga');
        await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');

        //kiểm tra username và password được điền đúng
        await expect(page.locator("//input[@id='user_login']")).toHaveValue('k17-quynh-nga');
        await expect(page.locator("//input[@id='user_pass']")).toHaveValue('r7!t7C7t%cwM6J7Y@)ES&Ym6');

        //click button login
        await page.locator("//input[@id='wp-submit']").click();

        // Kiểm tra login thành công, Chuyển tới trang có url là /wp-admin
        await expect(page).toHaveURL(/.*\/wp-admin/);

        //Kiểm tra heading h1 hiển thị "Dashboard"
        await expect(page.locator('//h1').nth(0)).toHaveText('Dashboard');

        //kiểm tra có 2 heading h2 hiển thị "At a Glance" và "Activity"
        await expect(page.locator('//h2')).toContainText(['At a Glance', 'Activity']);
    })

    test('@AUTH_002-Login fail', async ({ page }) => {
        //Nhập sai username và pass
        await page.locator("//input[@id='user_login']").fill('k17-quynh-nga1');
        await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');

        //Kiểm tra username và pass được nhập sai
        await expect(page.locator("//input[@id='user_login']")).toHaveValue('k17-quynh-nga1');
        await expect(page.locator("//input[@id='user_pass']")).toHaveValue('r7!t7C7t%cwM6J7Y@)ES&Ym6');

        //click button login
        await page.locator("//input[@id='wp-submit']").click();

        //Kiểm tra hiển thị lỗi "Error: The username <username> is not registered on this site. If you are unsure of your username, try your email address instead."
        await expect(page.locator("//div[@id='login_error']")).toHaveText(/Error: The username .* is not registered on this site\. If you are unsure of your username, try your email address instead\./)
    });
})
