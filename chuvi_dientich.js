/**
** Đầu vào
 - Tạo biến d cho chiều dài và cho người dùng nhập vào chiều dài
 - Tạo biến r cho chiều rộng và cho người dùng nhập vào chiều rộng
** Xử lý
- Tạo biến chuVi và gán giá trị là 0
- chuVi được cập nhật giá trị là (d + r) * 2
- Tạo biến dienTich và gán giá trị là 0
- dienTich được cập nhật giá trị là d * r
** Đầu ra
- In ra chuVi (log)
- In ra dienTich (log) 

 */

let d = prompt("Nhập chiều dài: ");
let r = prompt("Nhập chiều rộng: ");

d = Number(d);
r = Number(r);

let chuVi = 0;
chuVi = (d + r) * 2;
console.log("Chu vi hình chữ nhật là: " + chuVi + " cm");
let dienTich = 0;
dienTich = d * r;
console.log("Diện tích hình chữ nhật là: " + dienTich + " cm2");