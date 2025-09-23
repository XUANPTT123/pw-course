1. Git
- merge code: Gộp code từ nhánh A vào nhánh B  
 + Fast forward merge: Khi nhánh main không có sự thay đổi so với lúc mình checkout ra nhánh đó Không tạo ra commit nào cả 
    -> Cách merge: Đứng tại nhánh main (hoặc nhánh muốn merge code): git merge <tên nhánh>
 + three way merge: Khi nhánh main có sự thay đổi so với lúc mình checkout ra nhánh đó
    -> Cách merge: Đứng tại nhánh main (hoặc nhánh muốn merge code): git merge <tên nhánh>

- Git conflict: Là xung đột, xảy ra khi 2 người sửa cùng 1 dòng trong 1 file
    -> Cách sửa: Thảo luận với người viết code xem đoạn đấy muốn lấy đoạn code nào

- Git rebase: Cách tái sắp xếp lịch sử của 1 nhánh sao cho commit của nhánh mới nằm trên hết  1 nhánh khác
    -> Cách dùng: Đứng tại nhánh muốn merge code vào:  git rebase <main>

- Git squash: gộp các commit vào với nhau (chỉ dùng với các commit nào chưa push lên)
    -> Cách dùng: Đứng tại nhánh main: Git rebase -i HEAD ~3 (3 là số lượng commit cần gộp)

2. Css selector: Cú pháp đơn giản, ngắn gọn

3. Playwrite selector: Tiện, nhanh, dễ sử dụng, nhưng chỉ sử dụng trong playwrite và không search trên DOM được


