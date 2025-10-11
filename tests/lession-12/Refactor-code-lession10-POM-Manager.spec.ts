import { expect, test } from '@playwright/test';
import { PomManager } from '../01-pom/POM-Manager-lession-12/POM-Manager';

const xpathRegisterPage = "//a[contains(text(),'Register Page')]";
const xpathProductPage = "//a[contains(text(),'Product page')]";
const cssTodoPage = "//a[contains(text(),'Todo page')]";
const xpathpersonalNote = "//a[contains(text(),'Personal notes')]";

const userName = "Xuan1";
const email = "xuan@gmail.com";
const gender = "male";
const product1 = "Product 1";
const product2 = "Product 2";
const product3 = "Product 3";
const keyWord = 'công nghệ';

test.describe('Refactor code lession 10 - POM Manager', () => {

    test('RegisterPage', async ({ page }) => {
        const bien1 = new PomManager(page);

        await test.step('Login page, click RegisterPage', async () => {
            const materialPage = bien1.getNavigate();
            await materialPage.gotoPageMaterial();

            const registerPage = bien1.getRegisterPage();
            await registerPage.navigateRegister(xpathRegisterPage);

        })

        await test.step('Fill all infor', async () => {
            const fillInFor = bien1.getRegisterPage();
            await fillInFor.fillUsername(userName, email, gender);

            //verify infor
            await expect(page.locator(`//tr[td[text()='${userName}'] and td[text()='${email}'] and td[contains(., 'Gender: ${gender}')]]`)).toBeVisible();
        })
    })

    test('ProductPage', async ({ page }) => {
        const bien2 = new PomManager(page);

        await test.step('navigate ProductPage', async () => {
            const materialPage = bien2.getNavigate();
            await materialPage.gotoPageMaterial();

            const productPage = bien2.getProductPage();
            await productPage.navigateToProductPage(xpathProductPage);
        })

        await test.step('Add product item', async () => {
            const addToCard = bien2.getProductPage();
            await addToCard.AddToCard(product1, 2);
            await addToCard.AddToCard(product2, 3);
            await addToCard.AddToCard(product3, 1);

            //verify soluong sp tai gio hang dung nhu da them
            await expect(page.locator(`//td[text()='${product1}']/following-sibling::td[2]`)).toBeVisible();
            await expect(page.locator(`//td[text()='${product2}']/following-sibling::td[2]`)).toBeVisible();
            await expect(page.locator(`//td[text()='${product3}']/following-sibling::td[2]`)).toBeVisible();

            //Verify product total price
            const sumTotalPrice = await addToCard.totalProductPrice();
            const displayTotal = Number(await page.locator('//td[@class="total-price"]').textContent());
            expect(displayTotal).toBe(sumTotalPrice);
        })
    })

    test('Test3: Todo page', async ({ page }) => {
        const bien3 = new PomManager(page);

        await test.step('navigate ToDoPage', async () => {
            const materialPage = bien3.getNavigate();
            await materialPage.gotoPageMaterial();

            const productPage = bien3.getTodoPage();
            await productPage.navigateTodoPage(cssTodoPage);
        })

        await test.step('Thêm mới 100 todo', async () => {
            const addTodoList = bien3.getTodoPage();
            await addTodoList.addTodoList(100);
        })

        await test.step('Xóa các todo số lẻ', async () => {
            const deleteTodoList = bien3.getTodoPage();
            await deleteTodoList.deleteTodoList(100);
        })

        await test.step('Verify Todo90 exist', async () => {
            const verifyTodoexist = bien3.getTodoPage();
            await verifyTodoexist.VerifyTodoExist(90);
        })

        await test.step('Verify Todo21 not exist', async () => {
            const verifyTodoNotExist = bien3.getTodoPage();
            await verifyTodoNotExist.VerifyTodoNotExist(21);
        })

    })

    test('Test4: Persional Note', async ({ page }) => {
        const bien4 = new PomManager(page);

        await test.step('Navigate to Persional Note', async () => {
            const materialPage = bien4.getNavigate();
            await materialPage.gotoPageMaterial();

            const persionalNote = bien4.getPersionalNote();
            await persionalNote.navigatetoPersionalNotes(xpathpersonalNote);
        })

        await test.step('Add persional notes', async () => {
            const addPerNote = bien4.getPersionalNote();
            await addPerNote.AddPersionalNotes(xpathpersonalNote);
        })

        await test.step('Search', async () => {
            const searchItem = bien4.getPersionalNote();
            await searchItem.SearchNote(keyWord);
        })

        await test.step('Verify data hiển thị đúng keyword', async () => {
            const verifyData = bien4.getPersionalNote();
            await verifyData.VerifyDataContainsKeyWord(keyWord);
        })
    })
})