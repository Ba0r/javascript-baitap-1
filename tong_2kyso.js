/**
** Đầu vào:
- Tạo biến soDoi và để cho người dùng nhập vào 2 chữ số
** Xử lý:
- Tạo biên hangDonVi và gán giá trị là soDoi % 10
- Tạo biên hangChuc và gán giá trị là soDoi / 10
- Tạo biên tong và gán giá trị là hangChuc + hangDonVi
** Đầu ra:
- In ra tong (log)

 */
let soDoi = prompt("Nhập vào một số có 2 chữ số:");
soDoi = Number(soDoi);

let hangDonVi = soDoi % 10;      
let hangChuc = (soDoi / 10) | 0;
let tong = hangChuc + hangDonVi;

console.log("Tổng của 2 chữ số là: " + tong);