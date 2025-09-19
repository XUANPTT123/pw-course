import { expect, test } from '@playwright/test';

test.describe('POST-Post', async () => {

    test.beforeEach('Login thành công, click menu "Posts"', async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.locator("//input[@id='user_login']").fill('k17-quynh-nga');
        await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        await page.locator("//input[@id='wp-submit']").click();
        await page.locator("//div[text()='Posts']").click();
    })

    test('@POST_TAG_001 - Tag - add tag failed', async ({ page }) => {

        await test.step('Click menu tags and click button add new tag', async () => {
            await page.locator("//a[text()='Tags']").click();
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check show error "A name is required for this term."', async () => {
            await expect(page.locator("//div[@class='notice notice-error']")).toHaveText("A name is required for this term.");
        })

        await test.step('Fill tag name = "lesson tag", click button "Add New Tag"', async () => {
            await page.locator("//input[@id='tag-name']").fill("lesson tag");
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check show error "A term with the name provided already exists in this taxonomy."', async () => {
            await expect(page.locator("//div[@class='notice notice-error']")).toHaveText("A term with the name provided already exists in this taxonomy.");
        })
    });

    test('@POST_TAG_002 - Tag - add tag success', async ({ page }) => {

        await page.locator("//a[text()='Tags']").click();

        const name = "tag thanhxuan";
        await test.step('fill name = "tag {name}", Click button "Add New Tag"', async () => {
            await page.locator("//input[@id='tag-name']").fill(name);
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check show "Tag added." and tag invisible in list', async () => {
            await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");
            await page.waitForTimeout(1000);
            await expect(page.locator(`//a[normalize-space(text())='${name}']`)).toBeVisible();
        })

        const name1 = "tag thanhxuan 02";
        const slug = "tag-thanhxuan-02";
        await test.step('fill name = "tag {name} 02", slug = "tag-${name}-02"', async () => {
            await page.locator("//input[@id='tag-name']").fill(name1);
            await page.locator("//input[@id='tag-slug']").fill(slug);
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check show "Tag added." and new tag invisiable in list', async () => {
            await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name1}'] and .//td[normalize-space(text())='${slug}']]`)).toBeVisible();
        })

        await test.step('Delete data', async () => {
            page.once('dialog', async dialog => dialog.accept());
            await page.locator(`//tr[.//a[normalize-space(text())='${name1}']]`).hover();
            await page.locator(`//tr[.//a[normalize-space(text())='${name1}']]//a[text()='Delete']`).click();

            page.once('dialog', async dialog => dialog.accept());
            await page.locator(`//tr[.//a[normalize-space(text())='${name}']]`).hover();
            await page.locator(`//tr[.//a[normalize-space(text())='${name}']]//a[text()='Delete']`).click();
        })

        await test.step('Check delete data success', async () => {
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name1}'] and .//td[normalize-space(text())='${slug}']]`)).not.toBeVisible();
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name}']]`)).not.toBeVisible();
        })
    });

    test('@POST_TAG_002 - Tag - slug auto remove special character', async ({ page }) => {
        await page.locator("//a[text()='Tags']").click();

        const name3 = "tag thanhxuan 39279";
        const slug3 = "Đây là tag đặc biệt @100 $200";
        await test.step('fill name = "tag {name} 03", slug = "Đây là tag đặc biệt @100 $200"', async () => {
            await page.locator("//input[@id='tag-name']").fill(name3);
            await page.locator("//input[@id='tag-slug']").fill(slug3);
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check add tag success', async () => {
            await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}'] and .//td[contains(normalize-space(text()), 'day-la-tag-dac-biet-100-200')]]`)).toBeVisible();
        })

        await test.step('Delete data', async () => {
            page.once('dialog', async dialog => dialog.accept());
            await page.locator(`//tr[.//a[normalize-space(text())='${name3}']]`).hover();
            await page.locator(`//tr[.//a[normalize-space(text())='${name3}']]//a[text()='Delete']`).click();
        })

        await test.step('Check detele data success', async () => {
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}'] and .//td[contains(normalize-space(text()), 'day-la-tag-dac-biet-100-200')]]`)).not.toBeVisible();
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}']]`)).not.toBeVisible();
        })
    });

    test('@POST_CATEGORY_001 - Category - create category success', async ({ page }) => {
        await page.locator("//a[text()='Categories']").click();

        const name4 = "category Xuân 03";
        const slug4 = "Đây là category đặc biệt @100 $200";
        await test.step('Fill name and slug', async () => {
            await page.locator("//input[@id='tag-name']").fill(name4);
            await page.locator("//input[@id='tag-slug']").fill(slug4);
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check add category success', async () => {
            await expect(page.locator("//p[text()='Category added.']")).toHaveText("Category added.");
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name4}'] and .//td[contains(text(),"day-la-category-dac-biet-100-200")]]`)).toBeVisible();
        })

        const name5 = "category xuan 08";
        const parent = "K6 class";
        await test.step('Fill name and parent', async () => {
            await page.locator("//input[@id='tag-name']").fill(name5);
            await page.locator("//*[text()='Parent Category']").selectOption(parent);
            await page.locator("//input[@id='submit']").click();
        })

        await test.step('Check add category success', async () => {
            await expect(page.locator("//p[text()='Category added.']")).toHaveText("Category added.");
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name5}']]`)).toBeVisible();
        })

        await test.step('Delete data', async () => {
            page.once('dialog', async dialog => dialog.accept());
            await page.locator(`//tr[.//a[normalize-space(text())='${name4}']]`).hover();
            await page.locator(`//tr[.//a[normalize-space(text())='${name4}']]//a[text()='Delete']`).click();

            page.once('dialog', async dialog => dialog.accept());
            await page.locator(`//tr[.//a[normalize-space(text())='${name5}']]`).hover();
            await page.locator(`//tr[.//a[normalize-space(text())='${name5}']]//a[text()='Delete']`).click();
        })

        await test.step('Check delete data success', async () => {
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name4}']]`)).not.toBeVisible();
            await expect(page.locator(`//tr[.//a[normalize-space(text())='${name5}']]`)).not.toBeVisible();
        })
    })
})