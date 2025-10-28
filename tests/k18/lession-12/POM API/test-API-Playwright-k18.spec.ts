import { APIResponse, test, expect } from "@playwright/test";
import { userManagement } from "./API-Playwright-k18";

test.describe('User Managemanent', () => {
    const email = 'admin@example.com';
    const emailUser = 'john@example.com';
    const password = 'password';
    let token: any;
    const name = 'hahahaha';
    const email_user = 'hahahah7@gmail.com';
    let idUser: any;

    test('Login success', async({request}) => {
        await test.step('Login account admin', async() => {
            const respone = new userManagement(request);
            const responeAPI = await respone.Login(email,password);
            const sttCode = await responeAPI.status();
            const responeAdmin = await responeAPI.json();

            expect(sttCode).toBe(200);
            expect(responeAdmin.data.token).toBeTruthy();
            token = responeAdmin.data.token;
        });

        await test.step('Login account user', async() => {
            const respone = new userManagement(request);
            const responeAPI = await respone.Login(emailUser, password);

            const sttCode = await responeAPI.status();
            const responeUser = await responeAPI.json();
            expect(sttCode).toBe(200);
            expect(responeUser.data.token).toBeTruthy();
        });
    })

    test('Create user', async({request}) => {
        await test.step('Đã login vào tk admin', async() => {
            expect(token).toBeTruthy();
        });

        await test.step('Tạo user', async() => {
            const respone = new userManagement(request);
            const responeAPI = await respone.CreateUser(`${token}`, name, email_user);

            const sttCode = await responeAPI.status();
            const responeUser = await responeAPI.json();
            expect(sttCode).toBe(201);
            expect(responeUser.user.name).toBe(name);
            idUser = responeUser.user.id;
        });

        await test.step('Lấy danh sách', async() => {
            const respone = new userManagement(request);
            const responeAPI = await respone.getList(token);
            const sttCode = await responeAPI.status();
            const responeGetUser = await responeAPI.json();
            expect(sttCode).toBe(200);
            expect(responeGetUser.users[0].id).toEqual(idUser);
        });

        await test.step('Xóa user', async() => {
            const respone = new userManagement(request);
            const responeAPI = await respone.deleteUser(token, idUser);
            const sttCode = await responeAPI.status();
            const responeDelete = await responeAPI.json();
            expect(sttCode).toBe(200);
            expect(responeDelete.deleted.id).toEqual(String(idUser));
        });
    })
})