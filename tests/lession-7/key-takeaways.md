1. DOM - mối quan hệ 
    - Quy ước: 
        + node gốc (màu xanh dươnng)
        + node hiện tại (màu xanh lá cây)
        + node cần chú ý (màu cam)
    - Self: Node hiện tại
    - Parent: Node cha (Phía trên trực tiếp 1 cấp của node hiện tại)
    - Children: Node con (Phía dưới trực tiếp 1 cấp của node hiện tại)
    - Ancestor: Tổ tiên (Phía trên trực hệ với node hiện tại - lấy cả node trên cùng)
    - Descendant: Hậu duệ (Phía dưới, con cháu của node hiện tại)
    - Sibling: Anh em (Là các phần tử cùng cấp và cùng cha - lấy cả trước và sau)
    - Following: Theo sau (hướng duyệt xuống dưới - Là các node phía sau với node hiện tại - Không lấy con của node hiện tại)
    - Preceding: Phía trước (Hướng duyệt lên trên - là các node bên tay trái của node hiện tại, trừ các code ancestor)
    - Following-sibling: Anh em phía sau
    - Preceding-sibling: Anh em phía trước

2. Xpath method (text: Màu trắng, k nằm trong ngoặc. Thuộc tính: màu cam, nằm trong " " hoặc ' ')
    - wildcard: * (tất cả các thẻ trong dom) 
        //*[@id='username']
    - Chứa thuộc tính => Dùng cho thuộc tính
        //*[@username]: Tìm tất cả các thẻ có thuộc tính là id
    - and và or => Dùng cho cả 2
        //*[@id='username' and @type='text']: Đúng cả 2 mới trả ra giá trị
        //*[@id='username' or @type='text']: Đúng 1 phần cũng trả ra giá trị
    - innertext: text() => Dùng cho text
    - normalize-space(): Loại bỏ dấu cách đầu và cuối => Dùng cho cả 2
    - contains: Chứa text => Dùng cho cả 2
    - start-with: Bắt đầu bằng => Dùng cho cả 2
    - not: Loại trừ => Dùng cho cả 2

3. xpath trên mối quan hệ 
    //tag//relationship::tagname[@attr='value']
    