import {expect, test} from '@playwright/test';

test.describe('POST-Post', async() => {

    test.beforeEach('Login thành công, click menu "Posts/Tags"', async({page}) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.locator("//input[@id='user_login']").fill('k17-quynh-nga');
        await page.locator("//input[@id='user_pass']").fill('r7!t7C7t%cwM6J7Y@)ES&Ym6');
        await page.locator("//input[@id='wp-submit']").click();
        await page.locator("//div[text()='Posts']").click();
    })

    test('@POST_TAG_001 - Tag - add tag failed', async({page}) => {
        await page.locator("//a[text()='Tags']").click();
        //Click button "Add New Tag"
        await page.locator("//input[@id='submit']").click();
        //Kiểm tra hiển thị lỗi "A name is required for this term."
        await expect(page.locator("//div[@class='notice notice-error']")).toHaveText("A name is required for this term.");

        //Điền thông tin tag: name = "lesson tag", click button "Add New Tag"
        await page.locator("//input[@id='tag-name']").fill("lesson tag");
        await page.locator("//input[@id='submit']").click();
        //Kiểm tra hiển thị lỗi "A term with the name provided already exists in this taxonomy."
        await expect(page.locator("//div[@class='notice notice-error']")).toHaveText("A term with the name provided already exists in this taxonomy.");
    });

    test('@POST_TAG_002 - Tag - add tag success', async({page}) => {
        await page.locator("//a[text()='Tags']").click();
        const name = "tag thanhxuan";
        //Điền thông tin tag: name = "tag {name}" (name là tên bạn), Click button "Add New Tag"
        await page.locator("//input[@id='tag-name']").fill(name);
        await page.locator("//input[@id='submit']").click();
        // Hiển thị thông báo thêm tag thành công:"Tag added." Có tag mới được tạo ra trong danh sách tag có tên "tag {name}"
        await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");
        await page.waitForTimeout(1000);
        await expect(page.locator(`//a[normalize-space(text())='${name}']`)).toBeVisible();

        const name1 = "tag thanhxuan 02";
        const slug = "tag-thanhxuan-02";
        //Điền thông tin tag: name = "tag {name} 02", slug = "tag-${name}-02"
        await page.locator("//input[@id='tag-name']").fill(name1);
        await page.locator("//input[@id='tag-slug']").fill(slug);
        await page.locator("//input[@id='submit']").click();

        // Hiển thị thông báo thêm tag thành công:"Tag added." Có tag và slug mới được tạo ra trong danh sách
        await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name1}'] and .//td[normalize-space(text())='${slug}']]`)).toBeVisible();

        //Xóa các dữ liệu đã thêm vào 
        page.once('dialog', async dialog => dialog.accept());
        await page.locator(`//tr[.//a[normalize-space(text())='${name1}']]`).hover();
        await page.locator(`//tr[.//a[normalize-space(text())='${name1}']]//a[text()='Delete']`).click();

        page.once('dialog', async dialog => dialog.accept());
        await page.locator(`//tr[.//a[normalize-space(text())='${name}']]`).hover();
        await page.locator(`//tr[.//a[normalize-space(text())='${name}']]//a[text()='Delete']`).click();

        //Kiểm tra các dữ liệu đã xóa thành công
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name1}'] and .//td[normalize-space(text())='${slug}']]`)).not.toBeVisible();
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name}']]`)).not.toBeVisible();
    });

    test('@POST_TAG_002 - Tag - slug auto remove special character', async({page}) => {
        await page.locator("//a[text()='Tags']").click();
        //Điền thông tin tag: name = "tag {name} 03", slug = "Đây là tag đặc biệt @100 $200"
        const name3 = "tag thanhxuan 39279";
        const slug3 = "Đây là tag đặc biệt @100 $200";

        await page.locator("//input[@id='tag-name']").fill(name3);
        await page.locator("//input[@id='tag-slug']").fill(slug3);
        await page.locator("//input[@id='submit']").click();

        // Hiển thị thông báo thêm tag thành công:"Tag added."
        await expect(page.locator("//p[text()='Tag added.']")).toHaveText("Tag added.");

        // Có tag mới được tạo ra trong danh sách tag có tên như input, slug là "day-la-tag-dac-biet-100-200"
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}'] and .//td[contains(normalize-space(text()), 'day-la-tag-dac-biet-100-200')]]`)).toBeVisible();

         //Xóa các dữ liệu đã thêm vào 
        page.once('dialog', async dialog => dialog.accept());
        await page.locator(`//tr[.//a[normalize-space(text())='${name3}']]`).hover();
        await page.locator(`//tr[.//a[normalize-space(text())='${name3}']]//a[text()='Delete']`).click();

        //Kiểm tra các dữ liệu đã xóa thành công
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}'] and .//td[contains(normalize-space(text()), 'day-la-tag-dac-biet-100-200')]]`)).not.toBeVisible();
        await expect(page.locator(`//tr[.//a[normalize-space(text())='${name3}']]`)).not.toBeVisible();
    });

    test('@POST_CATEGORY_001 - Category - create category success', async({page}) => {
        await page.locator("//a[text()='Categories']").click();

        //Điền thông tin category: name = "category {name} 03", slug = "Đây là category đặc biệt @100 $200"
        const name4 = "category Xuân 03";
        const slug4 = "Đây là category đặc biệt @100 $200";

        await page.locator("//input[@id='tag-name']").fill(name4);
        await page.locator("//input[@id='tag-slug']").fill(slug4);
        await page.locator("//input[@id='submit']").click();

        // Hiển thị thông báo thêm tag thành công:"Category added."
        // Có category mới được tạo ra trong danh sách category có tên như input, slug là "day-la-category-dac-biet-100-200"
        await expect()
    })
})