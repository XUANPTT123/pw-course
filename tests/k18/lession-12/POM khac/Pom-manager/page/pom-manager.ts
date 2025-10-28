import {Page, test} from '@playwright/test';
import { registerPage } from './01-register-page';
import { productPage } from './02-product-page';
import { todoPage } from './03-togo-page';

export class pomManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async RegisterPage(){
        return new registerPage(this.page);
    }

    async ProductPage() {
        return new productPage(this.page);
    }

    async TodoPage(){
        return new todoPage(this.page);
    }
}