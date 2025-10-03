import {APIResponse, expect, test} from '@playwright/test';

const baseURL: string = "https://conduit-api.bondaracademy.com/";
let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNDA2fSwiaWF0IjoxNzU5NDI5MDY4LCJleHAiOjE3NjQ2MTMwNjh9.SDJQApAhAi-OKE-tq2PK3SyAmeNkeR-khDQ8BJBCEEo';

test ('demo1', async({request}) => {
    const response: APIResponse = await request.get(`${baseURL}api/articles?limit=10&offset=0`);

    //lấy status code
    console.log(`stt code: ${response.status()}`);

    //lấy respone cách 1 => trả ra object
    console.log(await response.json());

    //lấy respone cách 2 => trả ra text
    console.log(await response.text());
})

test ('demo2', async({request}) => {
    const response: APIResponse = await request.post(`${baseURL}api/users/login`, {
        data: { //body = data
            "user": {
            "email": "teovn84@gmail.com",
            "password": "teo@123"
            }
        }
    });

    //lấy stt code
    const sttCode = response.status();
    expect(sttCode).toBe(200);
    // console.log(`stt code: ${sttCode}`);

    //lấy token
    token = (await response.json()).user.token;
    console.log(`token : ${token}`);
    // expect(token).toBeDefined();
})

test('demo3', async({request}) => {
    const response: APIResponse = await request.post(`${baseURL}api/articles/`,{
        data: {
            "article": {
            "title": "Test 76543",
            "description": "assss",
            "body": "#Hello",
            "tagList": [
            "test3"
            ]
            }
        },
        headers: {
            'authorization': `Token ${token}`
        }
    });
    const sttCode = response.status();
    expect(sttCode).toBe(201);
    console.log('respone: ',await response.json());
})