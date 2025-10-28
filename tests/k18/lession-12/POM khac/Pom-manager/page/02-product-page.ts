import {expect, Page, test} from '@playwright/test';

export class productPage {
    page: Page;
    baseURL: string = 'https://material.playwrightvn.com/';

    constructor(page: Page) {
        this.page = page
    }

    async addProduct(productName: string, number: number){
        const xpathClick = await this.page.locator(`//div[text()='${productName}']/following-sibling::button`);
        for(let i = 0; i < number; i ++) {
            await xpathClick.click();
        }
    }

    async verifyProduct(productName: string[], number: number[]) {
        for(let i = 0; i< productName.length; i++) {
                const xItemName = await (await this.page.locator(`//tbody[@id='cart-items']/descendant::td[contains(text(),'${productName[i]}')]`)).textContent();
                const Quantity = await (await this.page.locator(`//td[contains(text(),'${productName[i]}')]/following-sibling::td[2]`)).textContent();
                expect(xItemName).toBe(productName[i]);
                expect(Quantity).toBe(String(number[i]));
            }
    }

    async sumPrice(productName: string[], number: number[]) {
        let sum = 0; 
        for(let i =0; i< productName.length; i++) {
            const quatitytext = await (await this.page.locator(`//td[contains(text(),'${productName[i]}')]/following-sibling::td[2]`)).textContent();
            const pricetext = await (await this.page.locator(`//td[contains(text(),'${productName[i]}')]/following-sibling::td[1]`)).textContent();
            const quatity = Number(quatitytext);
            const price = Number(pricetext?.replace('$', ''));
            sum += quatity* price;
        }
        return sum; 
    }
}