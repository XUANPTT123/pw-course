# GIT
1. Thay đổi commit message, *sử dụng sau ghi **git commit -m "message"**, muốn thay đổi message*
    Cách 1: **git commit --amend -m "message"**
    Cách 2: **git commit --amend**
        + Gõ **i** -> vào chế độ insert
        + Gõ **esc** để thoát insert
        + Gõ **:wq** -> write and quit

2. Đưa file về cùng stag -> working diretory, *Sử dụng sau **git add .** hoặc **git add file1***
    **git restore --staged .**
    **git restore --staged file1**

3. Đưa all thay đổi của commit từ vùng repo -> working directory, *Sử dụng sau **git commit -m "message"***
    **git reset HEAD~1**

4. Tạo brand: 
    **git branch <tên brand>**
    **git checkout <tên brand>**
    **git checkout -b <tên brand>** (*chuyển sang nhánh mới, mang theo cả lịch sử commit*)

    NOTE: 
        - Quay về main **git checkout main**
        - Xem có bao nhiêu nhánh **git branch**
5. **.gitignore** Bỏ qua các file k cần git theo dõi
    Ignore file 
        <file_name>
    Ignore folder
        <folder-name>/

# JAVA
1. Convention - Đặt tên biến
    snake_case: chưa dùng
    kebab-case: tên file
    camelCase: tên biến
    PascalCase: tên class

2. Format consolog
    let name = 'Xuan';
    constant tuoi = 18;
    console.log ('name ' + name + 'tuoi' + tuoi);
    console.log ('name ' , name , 'tuoi' , tuoi);
    console.log (`name${name}` + `age${age}`)

3. object
    let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        ...
        }
            Trong đó:
                - <thuoc_tinh>: giống quy tắc đặt tên biến
                - <gia tri>: có kiểu giống biến, hoặc là 1 object khác.

4. Function
    function <nameFunction>(){
        //code
    }
