import {APIResponse, expect, test} from '@playwright/test';
import { sign } from 'crypto';
import { describe } from 'node:test';

const baseURL: string = "https://conduit-api.bondaracademy.com/api";
const email = "xuanthanhpham30@gmail.com";
const passWord = "12345678";
const userName = "xuanthanhpham30";
const articleName = "API in playwright";
const articleAbout = "HAHAHAHAHA";
const articleTags = "ABC, QWER, TYUI";
const articleDes = "1234335454";
let token = '';
const commenttext = "hohoho";
let slug: string = '';
let commentID: number[] = [];

test.describe ('Lession-11-API', () => {
    test ('Test1: Đăng ký tài khoản', async({request}) => {
        const signUp: APIResponse = await request.post(`${baseURL}/users`,{
            data: {
                user : {email: `${email}`, password: `${passWord}`, username: `${userName}`}
            }
        });
        const sttCode = signUp.status();
        expect(sttCode).toBe(201);

        token = (await signUp.json()).user.token;
        expect(token).toBeDefined();
    })

    test('Test2', async({request}) => {
        await test.step('Đăng nhập tài khoản', async() => {
            const SignIn: APIResponse = await request.post(`${baseURL}/users/login`, {
                data: {
                    user: {email: `${email}`, password: `${passWord}`}
                }
            });
            const sttCode = SignIn.status();
            expect(sttCode).toBe(200);

            token = (await SignIn.json()).user.token;
            // console.log(`Token là: ${token}`);
            expect(token).toBeDefined();
        })

        await test.step('Create article', async() => {
            // console.log(`Token là: ${token}`);
            const article: APIResponse = await request.post(`${baseURL}/articles/`, {
                headers: {
                    'authorization': `Token ${token}`
                },
                data: {
                    article: {title: `${articleName}`, description: `${articleDes}`, body: `${articleAbout}`, tagList: [`${articleTags}`]}
                }
            })
            const sttCode = article.status();
            console.log(`Stt code create article là: ${sttCode}`);
            // expect(sttCode).toBe(201);
            const respone = await article.json();
            console.log(`resspone create article là: ${respone}`);
            // expect(respone).toBeDefined();
            slug = respone.article.slug;
            // console.log(`slug là: ${slug}`);
        })
    })

    test ('Test3: Add comment', async({request}) => {
        // console.log(`slug dùng ở test2: ${slug}`);
        for (let i = 1; i<=5; i++) {
            const comment: APIResponse = await request.post(`${baseURL}/articles/${slug}/comments`, {
                headers: {
                    'authorization': `Token ${token}`
                },
                data: {
                    comment: {body: `${commenttext}${i}`}
                }
            })

            const sttCode = comment.status();
            // console.log(`sttcode: ${sttCode}`);
            expect(sttCode).toBe(200);

            const body = (await comment.json()).comment.body;
            // console.log(`body lần lượt là ${i}: ${body}`);
            expect(body).toBe(`${commenttext}${i}`);

            const id = (await comment.json()).comment.id;
            commentID.push(id);
            // console.log(`id lần lượt là ${i}: ${id}`);
        }
        console.log(`id của comment số 2 là: ${commentID[1]}`);
    })

    test('Test4: Delete comment 2 và comment 5', async({request}) => {
        // console.log(`id của comment số 2 là: ${commentID[1]}`);
        const deleteComment2: APIResponse = await request.delete(`${baseURL}/articles/${slug}/comments/${commentID[1]}`, {
            headers: {
                'authorization': `Token ${token}`
            }
        });
        // console.log(`id của comment số 2 là: ${commentID[4]}`);
        const deleteComment5: APIResponse = await request.delete(`${baseURL}/articles/${slug}/comments/${commentID[4]}`, {
            headers: {
                'authorization': `Token ${token}`
            }
        })
        expect(deleteComment2.status()).toBe(200);
        expect(deleteComment5.status()).toBe(200);
    })

    test('Test5: Delete article', async({request}) => {
        // console.log(`token test5: ${token}`);
        // console.log(`slug test5: ${slug}`);
        const deletArticle = await request.delete(`${baseURL}/articles/${slug}`,{
            headers: {
                'authorization': `Token ${token}`
            }
        })
        const sttcode = deletArticle.status();
        // console.log(`stt code test5: ${sttcode}`);
        expect(sttcode).toBe(204);

        const respone = await deletArticle.text();
        expect(respone).toBe("");
    })
})