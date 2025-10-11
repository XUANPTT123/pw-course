1. object detructuring: giảm lặp code

VD: file ob-detructuring.js

    const person = {
        name: 'Loi';
        age: 18;
        city: 'HCM'
        job: 'Teacher',
        address: {
            street: 'leloi',
            city: 'HCM'
        }
    }
    //lay thuoc tinh
    console.log(person.name);
    console.log(person.age);
    console.log(person.city);

    //lay thuoc tinh theo detructur
    const(name, age, job = 'student') = person;
    console.log(name);

    //default value
    console.log(job);//trả về teacher nếu có khai báo trong persion, trả về student nếu không khai báo job trong person

    //đặt tên khác cho biến
    const {city: country} = persion;
    console.log(country);// trả về HCM

    //lấy biến trong object con
    const {adress: {street},} = persion
    console.log(street);// trả về leloi

    const {
        city: persionCity, 
        address: {city: address:city}
    } = persion; 

2. Fixture (thay cho hook)
    - Playwright sử dụng concept fixture
    - Fixture dùng để khởi tạo các environment khác nhau cho các test.
    - Fixture là độc lập giữa các test.
    - Fixture giúp nhóm các test dựa trên ý nghĩa, thay vì common setup
    - Trước use - giống beforeEach, sau use - giống afterEach

2.1. Dùng fixture có 1 test
    2.1.1. File fixture.ts

        import { Page, test as base } from '@playwright/test'

        const test = base.extend<{ dashboardPage: Page }>({
            dashboardPage: async ({ page }, use) => {
                console.log('Đi tới trang web');
                console.log('Login');
                await use(page);
                console.log('Xoá data test');
            }
        })

        export { test };
        
    2.2.2 file test.spec.ts

        import { test } from 'link file fixture.ts';

        test('media page test', async ({ dashboardPage }) => {
            console.log('code test media page');
        });

        -> KQ hien thi:
        Đi tới trang web
        Login
        code test media page1
        Xoá data test

2.2. Dùng fixture có nhiều test
    2.2.1. File fixture1.ts (giống 2.1.1)
    2.2.2. File fixture2.ts
        import { Page, test as base } from '@playwright/test'

        const test = base.extend<{ dashboardPage1: Page }>({
            dashboardPage1: async ({ page }, use) => {
                console.log('(1) Đi tới trang web');
                console.log('(1) Login');
                await use(page);
                console.log('(1) Xoá data test');
            }
        })

        export { test };

    2.2.3. File merge các fixture thanh 1 fixture

        import { test as t1 } from './dashboard-fixture';
        import { test as t2 } from './dashboard1-fixture'
        import { test as envConf } from './envConfig-fixture'

        import { mergeTests } from '@playwright/test';

        export const test = mergeTests(t1, t2, envConf);
    2.2.4. File test.spec.ts

        import { test } from 'link file merge các fixture thành 1 fixture';

        test('media page test', async ({ dashboardPage }) => {
            console.log('code test media page');
        });

        test('media page test1', async ({ dashboardPage1 }) => {
            console.log('code test media page1');
        });

        