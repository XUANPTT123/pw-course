 import { Page, test as base, expect } from '@playwright/test';
 import { MaterialBasePage } from './POM-lession-10/01-MaterialBasePage';
 import { RegisterPage } from './POM-lession-10/02-RegisterPage';
 import { ProductPage } from './POM-lession-10/03-ProductPage';
 import { TodoPage } from './POM-lession-10/04-TodoPage';
 import { PersionalNotes } from './POM-lession-10/05-PersionalNotes';

const test = base.extend<{ 
    registerPage : RegisterPage;
    productPage : ProductPage;
    todoPage : TodoPage;
    persionalNote : PersionalNotes }>({

        //fixture register
        registerPage: async ({ page}, use) => {
            const registerPage = new RegisterPage(page);
            await use(registerPage);
        },

        //fixture product
        productPage: async ({ page}, use) => {
            const productPage = new ProductPage(page);
            await use(productPage);
        }, 

        //fixture todo
        todoPage: async ({ page}, use) => {
            const todoPage = new TodoPage(page);
            await use(todoPage);
        }, 

        //fixture persionalNote
        persionalNote: async ({ page}, use) => {
            const persionalNote = new PersionalNotes(page);
            await use(persionalNote);
        },
})
export { test };