import { Page, test } from '@playwright/test';
import { MaterialBasePage } from './MaterialBasePage';

export class ProductPage extends MaterialBasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToProductPage() {
        await this.openMaterialPage();
        await this.gotoPage("Product page");
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