import { Page } from '@playwright/test';
import { MaterialBasePage } from './01-MaterialBasePage';

export class RegisterPage extends MaterialBasePage {
    xpathUserName: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
        this.xpathUserName = "//input[@id='username']";
        this.xpathEmail = "//input[@id='email']";
        this.xpathGenderMale = "//input[@id='male']";
        this.xpathGenderFemale = "//input[@id='female']";
    }

    async navigatetoRegister() {
        await this.openMaterialPage();
        await this.gotoPage("Register Page");
    }

    async fillUsername(userName: string) {
        await this.page.locator(this.xpathUserName).fill(userName);
    }

    async fillEmail(email: string) {
        await this.page.fill(this.xpathEmail, email);
    }

    async checkGender(gender: string) {
        if (gender.toLowerCase() === 'male') {
            await this.page.check(this.xpathGenderMale);
        } else 
        {
            await this.page.check(this.xpathGenderFemale);
        }
    }

    async submitRegister() {
        await this.page.click("//button[text()='Register']");
    }
}