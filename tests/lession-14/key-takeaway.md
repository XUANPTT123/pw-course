1. Async, await
    - async: dùng để khai báo hàm bất đồng bộ (asynchronous: bất đồng bộ, các request chạy song song với nhau, cần đợi thao tác trước hoàn thành trước r mới đến thao tác tiếp theo)
    - await: dùng để chờ promise (promise dùng để chờ 1 object trong js cho các tác vụ bất đồng bộ)
    => Mục đích: tăng hiệu năng xử lý hệ thống

2. Test generator (code gen)
    - Tự sinh ra code test khi thao tác
    - Record 1 test: 
        + sử dụng VS code: 
            * record new test
            * recore at cursor
        + sử dụng terminal
            * npx playwrite codegen <url>
    - VD Cách gen code = extension của playwright: 
        2.1. Click Testing (left menu VScode)
        2.2. Tại Playwrite, click Record new (Ht tự tạo ra 1 file mới)
        2.3. Muốn tạo các step, thực hiện giống manual test trên trang chrome
        2.4. Muốn expect, chọn assert visibilty (hình con mắt) để expect các phần tử giao diện
        2.5. Muốn check contain text, chọn assert text(hình chữ ab)
        2.6. Muốn check expect cho các ô textbox (có element là các thẻ input), chọn assert value
        2.7. Muốn check ui chọn assert snapsoft
        2.8. Muốn tiếp tục gen code trên file cũ, click vào Testing > Playwright > Record at cursor
    - VD cách gen code = terminal
        2.1. Tại terminal gõ px playwrite codegen <url>
        2.2. Tại chrome, thao tác cá bước như manual
        2.3. Sau đó copy code gen vào 1 file .spec.ts để run

3. Visual comparison (so sánh ảnh chupj màn hình hiển thị có đúng hay không)
    - Các bước tạo generate screenshort: 
        3.1. Tạo 1 file spec.ts, viết code để show ra màn hình cần so sánh 
        3.2. Chèn câu lệnh: 
            await expect(page).toHaveScreenshot("tên-ảnh.png"); để chụp hình viewport
            await expect(page).toHaveScreenshot({ //để chụp full screenc
                fullPage: true,
            });
        3.3. run lần 1 -> Lỗi, vì chưa gen ra ảnh 
        3.2. run lần 2, pass nếu ảnh giống nhau, fail nếu ảnh khác nhau, kiểm tra chi tiết bằng các ảnh trên log 

    - Các bước update screenshort (update expect)
        ○ Remove old file
        ○ Using terminal command
            ■ npx playwright test -g "@IMAGE" --update-snapshots

    - Mask locator: Che đi những phần k cần compare
        3.1. Như trên
        3.2. await expect(page).toHaveScreenshot("tên ảnh cần so sánh.png", {
                mask: [xpath cần che],
                maskColor: '#000000'
            })

4. Video recording: Ghi lại toàn bộ quá trình test dưới dạng video. Theo dõi test chạy như thế nào, debug,...
    - Cấu hình trong file: playwrite.config.ts
        + Để cấu hình cho toàn bộ project: cấu hình trong use bên trên
        + Để cấu hình cho 1 project: cấu hình trong use bên dưới
    - Cấu hình mode: 
        + on: record video cho mỗi test
        + off: Không chạy record
        + on-first-retry: record video chỉ khi test fail lần đầu tiên => ưu tiên dùng
        + retain-on-failure: recode video cho mỗi test, nhưng sẽ xóa all test thành công đi
            video: {
            mode: "on", 
            size: {
                width: 1000, height: 800
            }
            }

-> Chưa quay video được

5. Test report: 
    5.1. Cấu hình trong user bên trên (nếu muốn cấu hình cho all project), trong file playwright.config.ts
        + trace: 'on', và 
        + reporter: 'html',
    Node: Muốn k chạy test nào, thêm .skip vào sau mỗi test là được VD: test.skip('test0001', async({})....)

    5.2. Chạy file test bằng terminal : npx playwright test -g "tenfile"
    5.3. Kiểm tra file video trong test-results, click video, chọn Reveal in Finder 



6. Test emulation (test giả lập)
    - device: thiết bị test
        Cấu hình trong user bên dưới (nếu muốn cấu hình cho 1 test): 
            {
                name: 'Mobile Chrome',
                use: { ...devices['iPhone 15 Pro Max'], (crtl/command + click vào device để xem thiết bị)
                }, },

    - viewport: cửa sổ nhìn thấy nội dung trang web trong trình duyệt
        {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] ,
            viewport: {
            width: 400,
            height: 400
            }
        },
        },

    - locate and timezone
        locale: 'en-GB',
        timezoneId: 'Europe/Paris',

    - color scheme
        use: {
            colorScheme: 'dark',
        },
        
    - geolocation: tọa độ gps
    - permission
         geolocation: { longitude: 12.492507, latitude: 41.889938 },
        permissions: ['geolocation'],

    - link: https://playwright.dev/docs/emulation


7. Drag n Drop
    - dragTo: sử dụng hàm có sẵn
        await page.dragAndDrop(startLocator, tagetLocator);

    - drag manual: thao tác chuột
        await page.locator(startLocator).hover();
        await page.mouse.down();
        await page.locator(tagetLocator).hover();
        await page.mouse.up();

8. Global setup & global teardown
    - GlobalSetup: chạy trước khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT (thường để setup bật VPN)
    - GlobalTeardown: chạy sau khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT (thường để setup tắt VPN)

    8.1. Vào trang playwright: https://playwright.dev/docs/test-global-setup-teardown#option-1-project-dependencies, tìm kiếm global
    8.2. Có 2 cách để setup: 
        - project dependencies
        - Configure globalSetup and globalTeardown
            ● GlobalSetup: chạy trước khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT
            ● GlobalTeardown: chạy sau khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT

    8.3. Với cách 2, gobal setup
        b1: Tạo file global setting, cùng hàng với file test <global-setting/global-setup.ts>
        b2: Tại file playwrite.config.ts, tạo thêm 1 project mới và thêm dependencies trong chromium 
            projects: [
                        {
                        name: 'chromium',
                        use: { ...devices['Desktop Chrome']},
                        dependencies: ["set up VPN"]
                        },
                        {
                        name: "set up VPN",
                        testMatch: /global-setup\.ts/, //match vowis file global-setup.ts
                        testDir: './global-settings'//pham vi chạy, nếu k có sẽ mặc định lấy testDir ở dòng 16
                        }]
        b3: Chạy file test.spec.ts -> Lúc đó VPN sẽ được chạy đầu tiên

    8.4. Với cách 2, global teardown
        b1: giống setup
        b2: giống 2 nhưng thêm tên của teardown vào setup
            projects: [
                        {
                        name: 'chromium',
                        use: { ...devices['Desktop Chrome'] ,
                        },
                        dependencies: ["set up VPN"]
                        },
                        {
                        name: "set up VPN",
                        testMatch: /global-setup\.ts/, //match vowis file global-setup.ts
                        testDir: './global-settings',//pham vi chạy, nếu k có sẽ mặc định lấy testDir ở dòng 16
                        teardown: "clearn up VPN"
                        },
                        {
                        name: "clearn up VPN",
                        testMatch: /global-teardown\.ts/, //match vowis file global-setup.ts
                        testDir: './global-settings'//pham vi chạy, nếu k có sẽ mặc định lấy testDir ở dòng 16
                        }]
        b3: Chạy file test.spec.ts -> Lúc đó setup sẽ được chạy đầu tiên, teardown sẽ chạy cuối cùng

