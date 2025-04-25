/**
 **Đầu vào
 - tạo biến soTien và cho phép người dùng nhập vào số tiền cần đổi
 - tạo biến tyGia và cho phép người dùng nhập vào tỷ giá
 
 **Xử lý
 - tạo biến soTienQuyDoi và gán giá trị là 0
 - soTienQuyDoi được cập nhật giá trị là soTien * tyGia

 **Đầu ra
 - In ra soTienQuyDoi (log)

 */

 let soTien = prompt("Nhập số tiền cần đổi: ");
 let tyGia = prompt("Nhập tỷ giá: ");

 let soTienQuyDoi = 0;
    soTienQuyDoi = soTien * tyGia;
    console.log("Số tiền quy đổi là: " + soTienQuyDoi + " VND");