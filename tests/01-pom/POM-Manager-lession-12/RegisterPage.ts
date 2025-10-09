import { Page } from '@playwright/test';

export class RegisterPage {
    page;
    xpathUserName: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        this.page = page;
        this.xpathUserName = "//input[@id='username']";
        this.xpathEmail = "//input[@id='email']";
        this.xpathGenderMale = "//input[@id='male']";
        this.xpathGenderFemale = "//input[@id='female']";
    }

    async navigateRegister(pageName: string) {
        await this.page.click(`${pageName}`);
    }

    async fillUsername(userName: string, email: string, gender: string) {
        await this.page.locator(this.xpathUserName).fill(userName);
        await this.page.fill(this.xpathEmail, email);
        if (gender.toLowerCase() === 'male') {
            await this.page.check(this.xpathGenderMale);
        } else 
        {
            await this.page.check(this.xpathGenderFemale);
        }
        await this.page.click("//button[text()='Register']");
    }
}