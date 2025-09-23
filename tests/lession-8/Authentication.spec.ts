import { expect, test } from '@playwright/test';

test.describe('AUTH-Authentication', () => {
    let linkPage = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    let xpathUserName = "//input[@id='user_login']";
    let xpathPassWord = "//input[@id='user_pass']";
    let xpathLogin = "//input[@id='wp-submit']";
    let xpathError = "//div[@id='login_error']";
    let xpathHeadingDashboard = "//h1[text()='Dashboard']";
    let xpathHeadingAtaGlance = "//h2[text()='At a Glance']";
    let xpathHeadingActivity = "//h2[text()='Activity']";

    const userName = 'k17-quynh-nga';
    const passWord = 'r7!t7C7t%cwM6J7Y@)ES&Ym6';
    const userNameInvalid = 'hihhihih';
    const passWordInValid = 'r7!t7C7t%cwM6J7Y@)ES&Ym645454';

    test.beforeEach('login', async ({ page }) => {
        await page.goto(linkPage);
    });

    test('@AUTH_001-Login fail', async ({ page }) => {

        await test.step('Fill username and password invalid', async () => {
            await page.locator(xpathUserName).fill(userNameInvalid);
            await page.locator(xpathPassWord).fill(passWordInValid);

            //lấy giá trị thực tế trong input
            const ActualUserName = await page.inputValue(xpathUserName);
            const ActualPassWord = await page.inputValue(xpathPassWord);

            //so sánh expect
            expect(ActualUserName).toBe(userNameInvalid);
            expect(ActualPassWord).toBe(passWordInValid);
        })

        await test.step("Click button Login", async () => {
            await page.locator(xpathLogin).click();

            //Check hiển thị thông báo lỗi hay không
            const isMsgVisible = await page.locator(xpathError).isVisible();
            await expect(isMsgVisible).toBeTruthy();

            //Check hiển thị đúng mgs lỗi
            await expect(page.locator(xpathError)).toHaveText(`Error: The username ${userNameInvalid} is not registered on this site. If you are unsure of your username, try your email address instead.`)
        })
    })

    test('@AUTH_002-Login fail', async ({ page }) => {

        await test.step('Fill username and password invalid', async () => {
            await page.locator(xpathUserName).fill(userName);
            await page.locator(xpathPassWord).fill(passWord);

            const ActualUserName = await page.inputValue(xpathUserName);
            const ActualPassWord = await page.inputValue(xpathPassWord);

            await expect(ActualUserName).toBe(userName);
            await expect(ActualPassWord).toBe(passWord);
        })

        await test.step('Click button Login', async () => {
            await page.locator(xpathLogin).click();

            //verify URL
            await expect(page).toHaveURL(/.*wp-admin/);

            //verify h1 display "Dashboard"
            await expect(page.locator(xpathHeadingDashboard)).toBeVisible();

            //verify h2 display "At a Glance" và "Activity"
            await expect(page.locator(xpathHeadingAtaGlance)).toBeVisible();
            await expect(page.locator(xpathHeadingActivity)).toBeVisible();
        })
    });
})
