import { test } from '@playwright/test';

test('EX1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="01-xpath-register-page.html"]');

    await page.locator("//input [@id='username']").fill('XUANHAHA');
    await page.locator("//input [@id='email']").fill('xuanthanhpham81199@gmail.com');
    await page.locator("//input [@id='male']").check();
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.selectOption("//select[@id='interests']", "art");
    await page.selectOption("//select[@id='country']", "canada");
    await page.locator("//input[@id='dob']").fill('2025-09-07');
    await page.setInputFiles("//input[@id='profile']", "tests/lession-5/test-upload.txt");
    await page.locator("//textarea[@id='bio']").fill('comment bài 1');
    await page.locator("//input[@id='rating']").fill('8');
    await page.locator("//input[@id='favcolor']").fill('#00ffaa');
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//span[@class='slider round']").check();
    await page.locator("//div[@id='starRating']").click({ position: { x: 80, y: 10 } });
    await page.locator("//button[@type='submit']").click();
})