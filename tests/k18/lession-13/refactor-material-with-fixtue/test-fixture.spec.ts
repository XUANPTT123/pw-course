import { test} from './fixture'; 
import { expect } from '@playwright/test';

test.describe('refactor lession 10 with fixture', () => {
    const userName = "Xuan1";
    const email = "xuan@gmail.com";
    const gender = "male";
    const product1 = "Product 1";
    const product2 = "Product 2";
    const product3 = "Product 3";
    const keyWord = 'công nghệ';

    test('RegisterPage', async ({ registerPage }) => {

        await test.step('Login page, click RegisterPage', async () => {
            await registerPage.navigatetoRegister();
        })

        await test.step('Fill all infor', async () => {
            await registerPage.fillUsername(userName);
            await registerPage.fillEmail(email);
            await registerPage.checkGender(gender);
            await registerPage.submitRegister();
        })

        await test.step('Check fill infor correct', async () => {
            await expect(registerPage.page.locator(`//tr[td[text()='${userName}'] and td[text()='${email}'] and td[contains(., 'Gender: ${gender}')]]`)).toBeVisible();
        })
    })

    test('ProductPage', async ({ productPage }) => {

        await test.step('navigate ProductPage', async () => {
            await productPage.navigateToProductPage();
        })

        await test.step('Add product item', async () => {
            await productPage.AddToCard(product1, 2);
            await productPage.AddToCard(product2, 3);
            await productPage.AddToCard(product3, 1);
        })

        await test.step('Verify product quatity', async () => {
            await expect(productPage.page.locator(`//td[text()='${product1}']/following-sibling::td[2]`)).toBeVisible();
            await expect(productPage.page.locator(`//td[text()='${product2}']/following-sibling::td[2]`)).toBeVisible();
            await expect(productPage.page.locator(`//td[text()='${product3}']/following-sibling::td[2]`)).toBeVisible();
        })

        await test.step('Verify product total price', async () => {
            const sumTotalPrice = await productPage.totalProductPrice();
            const displayTotal = Number(await productPage.page.locator('//td[@class="total-price"]').textContent());
            expect(displayTotal).toBe(sumTotalPrice);
        })
    })

    test('TodoPage', async ({ todoPage }) => {
    
        await test.step('NavigateTodoPage', async () => {
            await todoPage.navigateTodoPage();
        })
    
        await test.step('Thêm mới 100 todo', async () => {
            await todoPage.addTodoList(100);
        })
    
        await test.step('Xóa các todo số lẻ', async () => {
            await todoPage.deleteTodoList(100);
        })
    
        await test.step('Verify Todo90 exist', async () => {
            await todoPage.VerifyTodoExist(90);
        })
    
        await test.step('Verify Todo21 not exist', async () => {
            await todoPage.VerifyTodoNotExist(21);
        })
    })
    
    test ('PersionalNote', async({persionalNote}) => {
    
        await test.step('Add persional notes', async() => {
            await persionalNote.AddPersionalNotes();
        })
    
        await test.step('Search', async() => {
            await persionalNote.SearchNote(keyWord);
        })
    
        await test.step('Verify data hiển thị đúng keyword', async() => {
            await persionalNote.VerifyDataContainsKeyWord(keyWord);
        })
    })
})
