// console.log("Hello BAE");
// // dùng để kiểm tra xem file có chạy hay không
// alert("Hello BAE");
// // dùng để xuất hiên thông báo cho người dùng

// Data type (kiểu dữ liệu)
//String (chuỗi): chữ
//Number (số): số
//Boolean (đúng/sai,luận lý): true/false
// *Variable (khai báo biến)
//undefined (không xác định): chưa gán giá trị cho biến
//null (rỗng): đã gán giá trị cho biến nhưng không có giá trị gì cả


// khai báo biến & gán giá trị
let fullname = "Nguyễn Văn A";
// khai báo biến fullname và gán giá trị là "Nguyễn Văn A"
// cập nhật giá trị cho biến fullname
fullname = "Nguyễn Văn B";
console.log("Họ & tên:"+" "+fullname);
// console.log("Nguyễn Văn A") khác với let fullname = "Nguyễn Văn A" thì console.log sẽ không lưu giá trị vào biến fullname còn let fullname = "Nguyễn Văn A" sẽ lưu giá trị vào biến fullname
// var là của ES5, còn let của ES6


let address = "Hà Nội";//string
console.log("Địa chỉ:"+" "+address);

let age = 18;//number
console.log(age);

let numberStudent;
// khai báo numberStudent nhưng chưa gán giá trị vì chưa biết giá trị sẽ như thế nào
numberStudent = 40;
console.log(numberStudent);

let gender = true;//boolean
// true là nam, false là nữ
console.log(gender);

const PI = 3.14;
// const là hằng số, không được thay đổi giá trị sau khi đã gán

// PROMPT
// dùng để yêu cầu người dùng nhập dữ liệu

// let firstName = prompt("Vui lòng nhập họ của bạn: ");
// // hàm prompt sẽ hiển thị một hộp thoại yêu cầu người dùng nhập dữ liệu và trả về giá trị mà người dùng đã nhập vào
// console.log(firstName);

/**
 * Dấu cộng (+)
 * Cộng chuỗi
 * Cộng số
 * Cộng chuỗi và số
 * 
 */

let number_1 = 10;
let number_2 = 20;
let result_12 = number_1 + number_2;
console.log(result_12);

/**
 * Dấu trừ (-)
 * Trừ số
 * Phép trừ chỉ quan tâm đến số không quan tâm đến chuỗi
 */

let number_3 = 10;//number
let number_4 = "5";//string
let result_34 = number_3 - number_4;
console.log(result_34);

/**
 * Dấu nhân (*)
 * Nhân số
 * Phép nhân chỉ quan tâm đến giá trị không quan tâm đến kiểu dữ liệu
 */

let number_5 = 10;//number
let number_6 = 2;//number
let result_56 = number_5 * number_6;
console.log(result_56);

/**
 * Dấu chia (/)
 * Chia số
 */

let number_7 = 10;//number
let number_8 = 2;//number
let result_78 = number_7 / number_8;
console.log(result_78);//5

/**
 * Dấu phần dư (%)
 * Phép chia lấy phần dư
 * 
 */

let number_9 = 10;//number
let number_10 = 3;//number
let result_910 = number_9 % number_10;
console.log(result_910);//1

/**
 * Tăng dần 1 đơn vị (++) 
 */

let count = 0;
let newCount = ++count;//= count +1 
console.log(newCount);

let count2 = 10;
let newCount2 = count++;
 //count2 gắn xong rồi (++) mới tăng
console.log(newCount);//0

/**
 * Giảm dần 1 đơn vị (--)
 * 
 */

let count3 = 10;
let newCount3 = --count3;//= count3 -1
console.log(newCount3);//9

let count4 = 10;
let newCount4 = count4--;//count4 gắn xong rồi (--) mới giảm
console.log(newCount4);//10

/**
 * Phép gán (=)
 * Gán giá trị cho biến
 */

/**
 * Phép gán cộng (+=)
 * Với phép tính này thì biến sẽ được cộng thêm giá trị mà bạn đã gán cho nó
 */
let number_11 = 10;//number
//cập nhật giá trị cho biến number_11 thành 12
number_11 += 2;//number_11 = number_11 + 2
console.log(number_11);//12 

/**
 * Phép gán trừ (-=)
 * Với phép tính này thì biến sẽ được trừ đi giá trị mà bạn đã gán cho nó
 */
let number_12 = 10;//number
//cập nhật giá trị cho biến number_12 thành 8
number_12 -= 2;//number_12 = number_12 - 2
console.log(number_12);//8

/**
 * Phép gán nhân (*=)
 * Với phép tính này thì biến sẽ được nhân với giá trị mà bạn đã gán cho nó
 * Phép gán chia (/=)
 * Với phép tính này thì biến sẽ được chia với giá trị mà bạn đã gán cho nó
 * Phép gán phần dư (%=)
 * Với phép tính này thì biến sẽ được chia với giá trị mà bạn đã gán cho nó và lấy phần dư
 * Phép gán lũy thừa (**=)
 * Với phép tính này thì biến sẽ được lũy thừa với giá trị mà bạn đã gán cho nó
 * 
 */

