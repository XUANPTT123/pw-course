import { expect, test } from '@playwright/test';
import { ProductPage } from '../01-pom/POM-lession-10/ProductPage';

const product1 = "Product 1";
const product2 = "Product 2";
const product3 = "Product 3";

test('ProductPage', async ({ page }) => {
    const productPage = new ProductPage(page);

    await test.step('navigate ProductPage', async () => {
        await productPage.navigateToProductPage();
    })

    await test.step('Add product item', async () => {
        await productPage.AddToCard(product1, 2);
        await productPage.AddToCard(product2, 3);
        await productPage.AddToCard(product3, 1);
    })

    await test.step('Verify product quatity', async () => {
        await expect(page.locator(`//td[text()='${product1}']/following-sibling::td[2]`)).toBeVisible();
        await expect(page.locator(`//td[text()='${product2}']/following-sibling::td[2]`)).toBeVisible();
        await expect(page.locator(`//td[text()='${product3}']/following-sibling::td[2]`)).toBeVisible();
    })

    await test.step('Verify product total price', async () => {
        const sumTotalPrice = await productPage.totalProductPrice();
        const displayTotal = Number(await page.locator('//td[@class="total-price"]').textContent());
        expect(displayTotal).toBe(sumTotalPrice);
    })
})