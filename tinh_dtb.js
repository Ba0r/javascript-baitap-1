/**
 **Đầu vào
- Tạo biến num_1
- Tạo biến num_2
- Tạo biến num_3
- Tạo biến num_4
- Tạo biến num_5

 **Xử lý
- tạo biến đtb và gán giá trị là 0
- đtb được cập nhật giá trị là (num_1 + num_2 + num_3 + num_4 + num_5) / 5

 **Đầu ra
- In ra đtb (log)
 
*/

let num_1 = prompt("Nhập điểm: ");
let num_2 = prompt("Nhập điểm: ");
let num_3 = prompt("Nhập điểm: ");
let num_4 = prompt("Nhập điểm: ");
let num_5 = prompt("Nhập điểm: ");

//Chuyển đổi kiểu dữ liệu từ string (màu đen) sang số (màu xanh)
num_1 = Number(num_1);
num_2 = Number(num_2);
num_3 = Number(num_3);
num_4 = Number(num_4);
num_5 = Number(num_5);
//Number là hàm chuyển đổi kiểu dữ liệu từ string sang number

console.log(typeof num_1);
// typeof dùng để kiểm tra kiểu dữ liệu của biến num_1
console.log(num_2);
console.log(num_3);
console.log(num_4);
console.log(num_5);

let dtb = 0;
dtb = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
console.log("Điểm trung bình của bạn là: " + dtb + " điểm");

// có 2 lỗi sai là SyntaxError và Logic 
// Lỗi SyntaxError là lỗi do sai cau trúc cú pháp của ngôn ngữ lập trình,
// Lỗi Logic là lỗi do sai logic của phép toán, không đúng với yêu cầu đề bài 
