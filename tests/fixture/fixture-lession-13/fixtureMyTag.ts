import {Page, test as base} from '@playwright/test';

let xpathUserName = "//input[@id='user_login']";
let xpathPassWord = "//input[@id='user_pass']";
let xpathLogin = "//input[@id='wp-submit']";
const userName = 'k17-quynh-nga';
const passWord = 'r7!t7C7t%cwM6J7Y@)ES&Ym6';

const test = base.extend <{dashBoardPage: Page}>({
    dashBoardPage: async ({page}, use) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.locator(xpathUserName).fill(userName);
        await page.locator(xpathPassWord).fill(passWord);
        await page.locator(xpathLogin).click();

        await use(page);   
    }
})

export {test};