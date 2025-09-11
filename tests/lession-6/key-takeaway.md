1. GIT clone: lấy code có sẵn trên github về máy tính của mình
     git clone <url>  //url lấy trong ssh hoặc https
    <new-name> // nếu muốn đặt tên repo khác với tên repo có sẵn

2. GIT brand
    - Tạo nhánh mới: git checkout -b <tên nhánh>
    - Back về folder đằng trước: cd ..
    - List danh sách các folder: ls
    - di chuyển vào các folder: cd <tên folder>
    - Kiểm tra có bao nhiêu nhánh: git remote  
    
3. GIT push: Đưa những thay đổi từ vùng repo lên vùng remote
    git push <remote_name>: //khi tạo 1 repo mới chưa link tới folder dưới local, dùng git remote add <remote-name> <ssh-key>. 
    <branch_name>: nhánh muốn đẩy lên

    VD: git push origin main

4. GIT pull: Cập nhật repo dưới local với những thay đổi mới nhất ở trên github.
    - git pull <remote-name> <branch-name>
    VD: git pull origin main 

    - Sự khác nhau giữa git clone và git pull
        + git clone: lấy cả repo về
        + git pull: Chỉ lấy dữ liệu của nhánh đó về máy
    
    - note: trước khi làm việc thì sẽ  pull code về

5. GIT stash/ unstash: Lưu các công việc đang làm vào vùng nhớ tạm/ lấy các công việc trong vùng nhớ tạm ra
    - git stash/ git stash pop (Chỉ sử dụng với các file đã được đẩy lên github)

    - git stash save --all (git stash -u)/ git stash pop: Đối với các file chưa được đẩy lên github


6. GIT merge request/ Pull request: Gộp code từ 1 nhánh sang nhánh còn lại
    git pull origin <branch-name>: Dùng cho github

7. Reviewer

8. Git convention
    - Đặt tên branch: 
        <type>/<short-description>
            type: 
                + feat:  Tính năng mới
                + fix: sửa lỗi
                + conf: thay đổi cấu hình
                + chore: các thay đổi lặt vặt
            short-description: Mục đích của branch được tạo ra
        VD: feat/lession-6-xuan

    - Commit message: 
        <ype>:<short-description>
        VD: feat: lession1

=> Flow làm việc: 
1. Clone remote repo về máy tính của mình 
2. Đứng ở nhánh main
3. Git pull origin main
4. Tạo nhánh mới để làm việc: git checkout -b branch_name
5. Tạo pull request
    - git add .
    - git commit -m ""
    - git push origin branch_name
6. Tạo punn request và add reviewer
7. Reviewer review xong -> Merge code ở branch_name vào nhánh main

=> Quy trình review code
1. Tạo brand
    Note: Luôn luôn chuyển về nhánh main và thực hiện pull code
        VD: 
        git checkout main
        git pull origin main
        git checkout -b feat/lession-7
        
2. Tạo pull request, thêm reviewer, gửi reviewer request
3. Thực hiện review code cho người khác
4. Thực hiện fix comment khi có comment từ người khác

9. Class
    - Cách chạy code trong typescript (file.ts)
        npx ts-node <path_file>/ npx tsx <path_file> (chạy code typescript) 
    
    - Cách chạy code trong java script (file.js)
        node <path_file> (chạy code java)

class Student {
    //thuộc tính chung
    name: string;
    city: string;

    //hàm khởi tạo -
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    //method
    sayMyName() {
        console.log(`my name: ${this.name}`);
    }
    
}
let student1 = new Student("Alex", "Hanoi");
student1.sayMyName();

