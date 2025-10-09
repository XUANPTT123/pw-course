import { expect, Page, test } from '@playwright/test';

export class TodoPage {
    page; 

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTodoPage(pageName: string) {
        await this.page.click(`${pageName}`);
    }

    async addTodoList(totalTodoList: number) {
        for (let i = 1; i <= totalTodoList; i++) {
            await this.page.locator("//input[@type='text']").fill(`To do ${i}`);
            await this.page.locator("//button[@id='add-task']").click();
        }
    }

    async deleteTodoList(totalTodoList: number) {
        this.page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= totalTodoList; i += 2) {
            await this.page.locator(`//li[span[text()='To do ${i}']]//button[text()='Delete']`).click();
        }
    }

    async VerifyTodoExist(todoExist: number) {
        await expect(this.page.locator(`//li[span[text()='To do ${todoExist}']]`)).toBeVisible();
    }

    async VerifyTodoNotExist(todoNotExist: number) {
        await expect(this.page.locator(`//li[span[text()='To do ${todoNotExist}']]`)).not.toBeVisible();
    }
}