1. Function advance
    - anonymous function 
    - Lambda function (arrow function)

2. DOM
    - Cấu trúc: Thẻ mở, thẻ đóng, thuộc tính, giá trị của thuộc tính, text, thẻ tự đóng
    - Các thẻ thường gặp:
        + <div>: chia các khối trong web
        + <h1></h1> đến <h6></h6>: tạo các header phân cấp theo thứ tự từ lớn tới bé
        + <form> </form>: chứa 1 form thông tin
        + Thẻ input: text, radio, email, checkbox, file, color, range, date
        + Thẻ textarea
        + Thẻ radio button
        + Thẻ list và dropdown
        + Thẻ button
        + Thẻ table
        + Thẻ datepicker
        + Thẻ slider: tạo thanh trượt
        + Thẻ iframe: link trang web khác vào trang hiện tại

3. Selector
    - xpath selector:
        + Tuyệt đối: Đi theo cây dom 
        + Tương đối: Tìm dựa vào đặc tính VD: //tenthe[@thuoctinh="giatri"]
    - css selector
    - playwrite selector

4. Playwright basic syntax
    - test: đơn vị cơ bản để khai báo 1 test
        VD: 
        import {test} from '@playwrite/test';
        test('<tên test>', async({page}) => {
            //code của test
        })
    - step: Đơn vị nhỏ hơn test, dùng để khai báo từng step của testcase
        VD: 
        await test.step('tên step', async() => {
            //code here
        });
    - Basic actions: 
        + navigate:  await page.goto('https://pw-practice.playwrightvn.com/');
        + Click: 
            * single click: 
                await page.locator("//button").click();
            * double click:
                await page.locator("//button").dblclick();
            * click chuột phải: 
                await page.locator("//button").click({
                    button: 'right'
                })
            * click kèm bấm phím khác 
                page.locator("").click({
                    modifiers: ['Shift],
                })
        + Input:
            * fill: 
                page.locator("//input").fill('xuanhehe');
            * gõ từng chữ vào ô input: 
                page.locator("//input").pressSequentially('xuanhihi',{
                    delay: 100
                });
        + Radio/checkbox:
            * Lấy giá trị hiện tại đang là check hay không: 
                const ischecked = page.locator("//input").ischecked();
            * Check/uncheck: 
                page.locator("//input").check();
                page.locator("//input").setchecked(false);
        + selector option:
        + set input file: 
