import { expect, test } from '@playwright/test';
import { pomManager } from './page/pom-manager';

test.describe('refactor lession 10 - material with pom management', () => {
    const userName = 'hahaha';
    const email = 'hahaha@gmail.com';
    const productName = ['Product 1', 'Product 2', 'Product 3'];
    const soluong = [2, 3, 1];
    const numberTodo = 20;
    // const productName1 = 'Product 1';
    // const productName2 = 'Product 2';
    // const productName3 = 'Product 3';

    test('1. Register page', async ({ page }) => {
        await test.step('fill all infor and click btn', async () => {
            const register = new pomManager(page);
            const Register = await register.RegisterPage();
            await Register.registerInfo(userName, email);
        });

        await test.step('Verify infor in table', async () => {
            const xpathUserName = `//table[@id='userTable']//td[text()='${userName}']`;
            const xpathEmail = `//table[@id='userTable']//td[text()='${email}']`
            const userNameInTable = await page.locator(xpathUserName).textContent();
            const emailInTable = await page.locator(xpathEmail).textContent();
            expect(userNameInTable).toBe(userName);
            expect(emailInTable).toBe(email);
        });
    });

    test('2. Product page', async ({ page }) => {
        const product = new pomManager(page);
        const Product = await product.ProductPage();

        await test.step('Add product', async () => {
            await page.goto(`https://material.playwrightvn.com//02-xpath-product-page.html`);
            await Product.addProduct(productName[0], soluong[0]);
            await Product.addProduct(productName[1], soluong[1]);
            await Product.addProduct(productName[2], soluong[2]);
        });

        await test.step('verify so luong sp', async () => {
            await Product.verifyProduct(productName, soluong);
        });

        await test.step('kiem ta tong tien sp', async () => {
            const realPrice = await Product.sumPrice(productName, soluong);
            const xapthtotalPrice = await page.locator("//td[@class='total-price']").textContent();
            const totalPrice = await Number(xapthtotalPrice?.replace('$', ''));
            expect(realPrice).toBe(totalPrice);
        });
    });

    test('3. Todo page', async ({ page }) => {
        const todo = new pomManager(page);
        const Todo = await todo.TodoPage();

        await test.step('add todo', async () => {
            await Todo.addTodo(numberTodo);
        });

        await test.step('delete todo', async () => {
            await Todo.deleteTodo(numberTodo);
        });

    });

})