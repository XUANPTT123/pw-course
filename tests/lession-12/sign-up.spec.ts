import {APIResponse, expect, test} from '@playwright/test';
import { SignUpAPI } from '../01-pom/POM-API-lession-12/sign-up-api.ts';
import { SignInAPI } from '../01-pom/POM-API-lession-12/sign-in-api.ts';
import { classCreateArticle } from '../01-pom/POM-API-lession-12/create-article-and-addcmt-api.ts';
import { classDelete } from '../01-pom/POM-API-lession-12/delete-api.ts';

const email = 'aabbcc202510@gmail.com';
const passWord = '12345678';
const userName = 'aabbcc202510';
let apiSignUp = SignUpAPI;
let apiSignIn = SignInAPI;
let apiAricle = classCreateArticle;
let apiAddComment = classCreateArticle;
let apiDelete = classDelete;

let token: string = '';
const title: string = 'title1';
const description = 'description1';
const body = 'body1';
const tagList = ['taglist1', 'taglist2'];
let slug: string = '';
const comment = 'comment';
let commentID: string ='';
let arrayCommentID: string[] = [];


test.describe('Refactor lession 11 - POM API', async() => {
    test('Test1: Đăng ký tài khoản', async({request}) => {
        const apiSignUp = new SignUpAPI(request);
        const res: APIResponse = await apiSignUp.signUp(email, passWord, userName);

        //verify status code
        const sttCode = res.status();
        expect(sttCode).toBe(201);

        //verify data respone
        const body = await res.json();
        const actualEmail = body.user.email;
        const actualUseName = body.user.username;
        expect(actualEmail).toBe(email);
        expect(actualUseName).toBe(userName);
    })

    test('Test2: Đăng nhập và tạo article', async({request}) => {
        await test.step('sign in', async() => {
            const apiSignIn = new SignInAPI(request);
            const res: APIResponse = await apiSignIn.signIn(email, passWord);

            //verify status code
            expect(res.status()).toBe(200);

            //verify data respone
            const body = await res.json();
            const actualEmail = body.user.email;
            const actualUseName = body.user.username;
            expect(actualEmail).toBe(email);
            expect(actualUseName).toBe(userName);
            
            //get token
            token = body.user.token;
        })

        await test.step('Create article', async() => {
            const apiAricle = new classCreateArticle(request);
            const res: APIResponse = await apiAricle.createArticle(token, title,description,body, tagList);

            //verify statuscode
            const statuscode = res.status();
            expect(statuscode).toBe(201);

            //verify respone data
            const bodyrespone = await res.json();
            const actualTitle = bodyrespone.article.title;
            const actualDescription = bodyrespone.article.description;
            const actualBody = bodyrespone.article.body;
            expect(actualTitle).toBe(title);
            expect(actualDescription).toBe(description);

            //get slug
            slug = bodyrespone.article.slug;
        })
    })

    test('Test3: add 5 comment', async({request}) => {
        const apiAddComment = new classCreateArticle(request);
        for (let i = 1; i <=5; i++) {
            const res: APIResponse = await apiAddComment.addComment(token,slug,`${comment}${i}`);

            //verify statuscode
            expect(res.status()).toBe(200);

            //verify data respone
            const bodycomment = await res.json();
            const actualComment = bodycomment.comment.body;
            expect(actualComment).toBe(`${comment}${i}`)

            //get comment ID
            commentID = bodycomment.comment.id;
            arrayCommentID.push(commentID);
        }
    })

    test('Test4: Xoa comment 2, 5', async({request}) => {
        const apiDelete = new classDelete(request);
        for(let i = 1; i <=5; i++) {
            if ((i===1) || (i ===4 )) {
                const res: APIResponse = await apiDelete.deleteComment(token, slug, arrayCommentID[i]);
                expect(res.status()).toBe(200);
            }
        }   
    })

    test('Test5: Delete article', async({request}) => {
        const apiDelete = new classDelete(request);
        const res: APIResponse = await apiDelete.deleteArticle(token, slug);
        expect(res.status()).toBe(204);
    })
})