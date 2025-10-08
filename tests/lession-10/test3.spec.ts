import { test } from '@playwright/test';
import { TodoPage } from '../01-pom/POM-lession-10/TodoPage';

test('TodoPage', async ({ page }) => {
    const todoPage = new TodoPage(page);

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