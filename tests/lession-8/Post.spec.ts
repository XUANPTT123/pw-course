import { expect, test } from '@playwright/test';

let linkPage = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
let xpathUserName = "//input[@id='user_login']";
let xpathPassWord = "//input[@id='user_pass']";
let xpathLogin = "//input[@id='wp-submit']";
let xpathMenuPost = "//div[text()='Posts']";
let xpathMenuTags = "//a[text()='Tags']";
let xpathBtnAddNewTag = "//input[@id='submit']";
let xpathMgsRequire = "//p[text()='A name is required for this term.']";
let xpathMgsExist = "//p[text()='A term with the name provided already exists in this taxonomy.']";
let xpathMgsTagAdd = "//p[text()='Tag added.']";
let xpathTagName = "//input[@id='tag-name']";
let xpathTagSlug = "//input[@id='tag-slug']";
let xpathMenuCategory = "//a[text() ='Categories']"
let xpathMgsCategoryAdd = "//p[text()='Category added.']";

const userName = 'k17-quynh-nga';
const passWord = 'r7!t7C7t%cwM6J7Y@)ES&Ym6';

function getXpathTagNameInTable(name: string) {
    return `//tbody//a[contains(text(),'${name}')]`;
}

function getXpathBtnDelete(name: string) {
    return `//a[@aria-label='Delete “${name}”']`;
}

test.describe('POST - Post', () => {
    test.beforeEach(async ({ page }) => {
        await test.step('Go to menu "Posts"', async () => {
            await page.goto(linkPage);
            await page.locator(xpathUserName).fill(userName);
            await page.locator(xpathPassWord).fill(passWord);
            await page.locator(xpathLogin).click();
            await page.locator(xpathMenuPost).click();
            page.on('dialog', dialog => dialog.accept());
        })
    })

    test('@POST_TAG_001 - Tag - add tag failed', async ({ page }) => {
        await test.step('Click btn Add new tag', async () => {
            await page.locator(xpathMenuTags).click();
            await page.locator(xpathBtnAddNewTag).click();
            await expect(page.locator(xpathMgsRequire)).toBeVisible();
        })

        await test.step('Fill tag name = "lesson tag", click button "Add New Tag"', async () => {
            await page.locator(xpathTagName).fill("lesson tag");
            await page.locator(xpathBtnAddNewTag).click();
            await expect(page.locator(xpathMgsExist)).toBeVisible();
        })
    })

    const name = 'tag Xuan';
    const name2 = "tag xuan 02";
    const slug2 = "tag-xuan-02";
    const name3 = "category xuan 03";
    const slug3 = "Đây là category đặc biệt @100 $200";
    const name4 = "category xuan 04";
    const slug4 = "K6 class";

    test('@POST_TAG_002 - Tag - add tag success', async ({ page }) => {
        await test.step('fill name = "tag {name}", Click button "Add New Tag"', async () => {
            await page.locator(xpathMenuTags).click();
            await page.locator(xpathTagName).fill(name);
            await page.locator(xpathBtnAddNewTag).click();

            //Check show Mgs tag add and show data in table 
            await expect(page.locator(xpathMgsTagAdd)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name))).toBeVisible();

            //delete data
            await page.locator(getXpathTagNameInTable(name)).hover();
            const btnDelete = page.locator(getXpathBtnDelete(name));
            await btnDelete.click();
            await expect(page.locator(getXpathTagNameInTable(name))).not.toBeVisible();
        })
    })

    test('@POST_TAG_002 - Tag - slug auto remove special character', async ({ page }) => {
        await test.step('fill name = "tag {name} 02", slug = "tag-${name}-02"', async () => {
            await page.locator(xpathMenuTags).click();
            await page.locator(xpathTagName).fill(name2);
            await page.locator(xpathTagSlug).fill(slug2);
            await page.locator(xpathBtnAddNewTag).click();

            //Check show mgs và data in table
            await expect(page.locator(xpathMgsTagAdd)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name2))).toBeVisible();

            //Delete data
            await page.locator(getXpathTagNameInTable(name2)).hover();
            await page.locator(getXpathBtnDelete(name2)).click();
            await expect(page.locator(getXpathTagNameInTable(name2))).not.toBeVisible();
        })
    })

    test('@POST_CATEGORY_001 - Category - create category success', async ({ page }) => {
        await test.step('name = "category {name} 03", slug = "Đây là category đặc biệt @100 $200"', async () => {
            await page.locator(xpathMenuCategory).click();
            await page.locator(xpathTagName).fill(name3);
            await page.locator(xpathTagSlug).fill(slug3);
            await page.locator(xpathBtnAddNewTag).click();

            //Check show message and show data in table
            await expect(page.locator(xpathMgsCategoryAdd)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name3))).toBeVisible();
        })

        await test.step('Input name = "category {name} 04", parent = "K6 class"', async () => {
            await page.locator(xpathMenuCategory).click();
            await page.locator(xpathTagName).fill(name4);
            await page.locator(xpathTagSlug).fill(slug4)
            await page.locator(xpathBtnAddNewTag).click();

            //Check show Mgs and data in table
            await expect(page.locator(xpathMgsCategoryAdd)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name4))).toBeVisible();
        });

        await test.step('Delete data', async () => {
            await page.locator(getXpathTagNameInTable(name3)).hover();
            await page.locator(getXpathBtnDelete(name3)).click();
            await expect(page.locator(getXpathTagNameInTable(name3))).not.toBeVisible();

            await page.locator(getXpathTagNameInTable(name4)).hover();
            await page.locator(getXpathBtnDelete(name4)).click();
            await expect(page.locator(getXpathTagNameInTable(name4))).not.toBeVisible();
        });
    })
});
