/**
 **Đầu vào
- Tạo một biến có tên là "luongNgay" và gán giá trị 1000 cho biến đó.
- Tạo biến soNgayLam và cho phép người dùng nhập vào số ngày làm việc trong tháng.
 
 **Xử lý
- Tạo biến tongTien và gán giá trị là 0
-  tongTien được cập nhật giá trị là luongNgay * soNgayLam

 **Đầu ra
- In ra tongTien (log)
 */

const luongNgay = 1000;
let soNgayLam = prompt ("Nhập số ngày làm việc trong tháng: ");
let tongTien = 0;
tongTien = luongNgay * soN22gayLam;
console.log("Tổng tiền của bạn là:"+" "+tongTien+"VND");