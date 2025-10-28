import { expect, Page, test } from '@playwright/test';

export class todoPage {
    page: Page;
    baseURL: string = 'https://material.playwrightvn.com/';

    constructor(page: Page) {
        this.page = page
    }

    async addTodo(todoNumber: number) {
        await this.page.goto(`${this.baseURL}/03-xpath-todo-list.html`);
        for (let i = 1; i <= todoNumber; i++) {
            const todoText = `Todo ${[i]}`;
            await this.page.locator('#new-task').fill(todoText);
            await this.page.locator('#add-task').click();

            // verify
            const todoi = await this.page.locator(`//ul[@id='task-list']/descendant::span[contains(text(),'Todo ${[i]}')]`).textContent();
            expect(todoi).toBe(todoText);
        }
    }

    async deleteTodo(todoNumber: number){
        // await this.page.goto(`${this.baseURL}/03-xpath-todo-list.html`);
        await this.page.on('dialog', dialog => dialog.accept());
        for(let i = 1; i <= todoNumber; i+=2){
            await this.page.locator(`#todo-${i}-delete`).click();

            //verify
            const todoDelete = await this.page.locator(`//ul[@id='task-list']/descendant::span[text()='Todo ${i}']`);
            expect(todoDelete).not.toBeVisible();
        }
    }
}