1. API
    - API (application programming interface): Là trung gian giúp hệ thống  và giao diện người dùng giao tiếp với nhau 
    - Test API để: 
        + Phát hiện lỗi sớm kể cả chưa xong font end
        + test tích hơp giữa các server khác nhau
    - Các định dạng sử dụng trong API: 
        + XML (extensible markup language): Có cấu trúc giống các thẻ html và dùng cho SOAP
        + JSON (javascript object notation): 
            * Nằm trong ngoặc nhọn hoặc ngoặc vuông
            * Có cấu trúc dạng Key : value
            * Key luôn luôn là kiểu string và value có thể là kiểu: string, number, boolean, object, array, null
            * Dùng trong REST( representational state transfer)
    - Các loại API: 
        + SOAP: simple object access protocol - trả về xml
        + RPC: remote proceduce call
        + REST:  representational state transfer
    - Authentication: là quá trình sử dụng các thông tin xác thực như username, pass,.. để ht validate được đó là bạn. Có 2 cách để authen
        + Sử dụng header
        + Sử dụng cookie
    - API component: 
        + API giao tiếp với nhau qua giao thức http và https: 
            * Http: Không có mã hóa
            * Https: Có mã hóa
        + Mối quan hệ: 
            * Client: Gửi đi yêu cầu (Request)
            * Server: Trả về KQ (Respone)
        + Request bao gồm các thành phần: 
            * URL: Base URL, Endpoint, Parameter
            * Method: 
                ● GET: lấy dữ liệu
                ● POST: tạo mới dữ liệu
                ● PUT: update toàn bộ dữ liệu
                ● DELETE: xóa dữ liệu
                ● PATCH: update 1 phần dữ liệu
                ● OPTION: trả về danh sách các phương thức HTTP hỗ trợ endpoint
                ● HEAD: giống GET nhưng trả về header
            * Header
            * Body
        + Respone:
            * Status code
                ● 1xx: Phản hồi thông tin
                    ○ 101: Switching protocol.
                ● 2xx: Thành công
                    ○ 200: OK
                    ○ 201: Created
                ● 3xx: chuyển hướng
                    ○ 301, 302: Redirected
                ● 4xx: lỗi liên quan đến người dùng
                    ○ 400: Bad Request
                    ○ 404: Not Found
                ● 5xx: lỗi hệ thống
                    ○ 500: Internal Server Error
                    ○ 502: Bad Gateway
            * Header
            * Body
2. API với Postman
    - GET: Không cần nhập body
    - POST: 
        + Login: Nhập URL, body, method -> Send
        + Tạo article mới: Nhập URL, body, method, header: Authentication: Token xxx
3. API với Playwright
    - Sử dụng request fixture để thực hiện gọi API
        + Gọi các API mà không cần qua trình duyệt
        + Thực hiện gọi api trực tiếp qua
         code

    - VD: 
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
    