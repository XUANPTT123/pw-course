import { expect, test } from '@playwright/test';
import { RegisterPage } from '../01-pom/POM-lession-10/RegisterPage';

const userName = "Xuan1";
const email = "xuan@gmail.com";
const gender = "male";

test('RegisterPage', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await test.step('Login page, click RegisterPage', async () => {
        await registerPage.navigatetoRegister();
    })

    await test.step('Fill all infor', async () => {
        await registerPage.fillUsername(userName);
        await registerPage.fillEmail(email);
        await registerPage.checkGender(gender);
        await registerPage.submitRegister();
    })

    await test.step('Check fill infor correct', async () => {
        await expect(page.locator(`//tr[td[text()='${userName}'] and td[text()='${email}'] and td[contains(., 'Gender: ${gender}')]]`)).toBeVisible();
    })

})