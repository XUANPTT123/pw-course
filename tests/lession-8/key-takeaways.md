1. Playwrite

a. Test group/ suite: Nhóm các test lại để dễ quản lý
    test.describe('Tên suit', async() => {

    })

b. Hooks: Các thời điểm chạy test
    - BeforeAll: Chạy 1 lần duy nhất trước tất cả các test

    - BeforeEach: Chạy trước mỗi test
    - Test1
    - AfterEach: Chạy sau mỗi test

    - AfterAll: Chạy 1 lần duy nhất sau tất cả các test 

c. Assertion & Web first assertion: Kiểm tra 1 câu lệnh nào đó có đúng hay không
- Có retry 
    expect()
- Không có retry 
    await expect()
