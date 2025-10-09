import { Page, test } from '@playwright/test';

export class ProductPage {
    page; 
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToProductPage(pageName: string) {
        await this.page.click(`${pageName}`);
    }

    async AddToCard(productName: string, number: number) {
        await this.page.locator(`//div[text()='${productName}']/following-sibling::button`).click({clickCount: number});
    }

    async totalProductPrice() {
        const rows = this.page.locator("//tbody[@id='cart-items']/tr");
        const rowCount = await rows.count();
        
        let sumtotal = 0;
        for (let i = 1; i <= rowCount; i++) {
            const price =  this.page.locator(`//td[contains(text(),'Product ${i}')]/following-sibling::td[3]`).textContent();
            const PriceNumber = Number(price);
            sumtotal += PriceNumber;
        }
        return sumtotal;
    }
}