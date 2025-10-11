import {test, Page} from '@playwright/test';
import { LoginPage } from '../01-pom/POM-return-another-POM-lession-12/Login';

test.describe('Refactor code lession 8 - return POM from another POM',() => {

    test.beforeEach(async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    })
    
    test('@AUTH_001-Login fail', async({page}) => {
        const loginPage = new LoginPage(page);
    })
})