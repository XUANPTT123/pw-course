import { test, expect } from '@playwright/test';

test.describe(() => {

  test.beforeAll(async() => {
    console.log("before all");
  })

  test.afterAll(async() => {
    console.log("after all");
  })

  test.beforeEach(async() => {
    console.log("before each");
  })

  test.afterEach(async() => {
    console.log("after each ");
  })

  test('testxuan', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
    await page.getByRole('textbox', { name: 'Username:' }).click();
    await page.getByRole('textbox', { name: 'Username:' }).fill('xuanhaha');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('xuanhihi@gmail.com');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Traveling' }).check();
    await page.getByRole('checkbox', { name: 'Reading' }).check();
    await page.getByLabel('Interests:').selectOption('science');
    await page.getByLabel('Country:').selectOption('uk');
    await page.locator('#registrationForm div').filter({ hasText: 'Enable Feature:' }).locator('span').click();
    await page.getByRole('button', { name: 'Register' }).click();

    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    await page.getByRole('button', { name: 'Add to Cart' }).first().dblclick();
    await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
    await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
    await expect(page.getByRole('cell', { name: 'Product 1' })).toBeVisible();
    await expect(page.locator('#cart-items')).toContainText('Product 2');
    await expect(page.locator('#cart-items')).toContainText('Product 2');
  });

  test('testxuan1', async({page}) => {
    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
  })
})
