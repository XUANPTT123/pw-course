1. Class
    - Sử dụng extends để kế thừa.
        class A extends class B {
            constructor() {
            super()
        }}
        
        => class A là class con, class B là class cha

    - super = gọi tới hàm tạo của class cha
    - Khi class A kế thừa class B, A chứa toàn bộ các
property và method của B

2. POM
    - POM = Page Object Model
    - Là 1 design pattern
    - Thường sử dụng trong automation test
    - Lưu ý: không có 1 chuẩn chung nào cho POM
    - Tiêu chuẩn của POM Dựa trên:
        - Framework
        - Ngôn ngữ
        - Author
        - Sở thích