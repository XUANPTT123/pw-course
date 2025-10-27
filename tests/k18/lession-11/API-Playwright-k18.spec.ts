import { expect, test } from '@playwright/test';

test.describe('API Playwright K18 - User management', () => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';
    let tokenAdmin: any;
    const name = 'neww';
    const email = 'neww10@gmail.com';
    let idUser: any;
    let a: any;

    test('Login success', async ({ request }) => {
        await test.step('1. Login account admin', async () => {
            const respone = await request.post(`${baseURL}/login.php`, {
                data: {
                    "email": "admin@example.com",
                    "password": "password"
                }
            });
            const sttCodeAdmin = await respone.status();
            const responeAdmin = await respone.json();
            expect(sttCodeAdmin).toBe(200);
            expect(responeAdmin.data.token).toBeTruthy();
            tokenAdmin = responeAdmin.data.token;
        })

        await test.step('2. Login account user', async () => {
            const respone = await request.post(`${baseURL}/login.php`, {
                data: {
                    "email": "john@example.com",
                    "password": "password"
                }
            });
            const sttCodeUser = await respone.status();
            const responeUser = await respone.json();
            expect(sttCodeUser).toBe(200);
            expect(responeUser.data.token).toBeTruthy();
        })
    });

    test('Create user success', async ({ request }) => {
        await test.step('Đã login vào tk admin', async() => {
            expect(tokenAdmin).toBeTruthy();
        });

        await test.step('Tạo user', async() => {
            const respone = await request.post(`${baseURL}/users.php`, {
                headers:{
                    "Authorization": `Bearer ${tokenAdmin}`
                }, 
                data: {
                    "name": `${name}`,
                    "email": `${email}`,
                    "password": "password",
                    "facebook": "https://facebook.com/newuser",
                    "avatar": "https://i.pravatar.cc/150?img=20",
                    "hobbies": "Reading, Coding",
                    "role": "user"
                }
            });
            const sttCode = await respone.status();
            const responeUser = await respone.json();
            expect(sttCode).toBe(201);
            expect(responeUser.user.name).toBe(`${name}`);
            idUser = responeUser.user.id;
        });

        await test.step('Lấy danh sách user', async() => {
            const respone = await request.get(`${baseURL}/users.php`, {
                headers: {
                    "Authorization": `Bearer ${tokenAdmin}`
                }
            });
            const responeUser = await respone.json();
            const findUser = responeUser.users.find(a => a.id === idUser);
            expect(findUser.id).toBe(idUser);
        });

        await test.step('Xóa user vừa tạo', async() => {
            const respone = await request.delete(`${baseURL}/users.php`, {
                headers: {
                    "Authorization": `Bearer ${tokenAdmin}`
                }, 
                data: {
                        "id": `${idUser}`
                    }
            })
            const sttCodeDelete = await respone.status();
            const responeDelete = await respone.json();
            expect(sttCodeDelete).toBe(200);
            expect(responeDelete.deleted.id).toEqual(String(idUser));
        });
    });
})