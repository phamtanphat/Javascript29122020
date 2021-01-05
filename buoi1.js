// 1 : Biến
// comment code : ctrl + /
// var a = "Pham Tan Phat" 
// const name = "Nguyen Van Teo"

// mutable (thay đổi trạng thái) vs immutable(Không thay đổi)

// 2 : Kieu du lieu
// primities

// object (reference)

// null : Trỏ tới tham chiếu tới đối tượng nhưng vùng nhớ không có hoặc không tồn tại
// undefined

// TH1 : Khai báo biến bằng từ khóa var nhưng truyền giá trị
// console.log(a)
// var a

// Th2 : Truy vấn vào thuộc tính không tồn tại

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// console.log(teo['name']['a'])

// Th3 : lấy giá của function mà không có return


// console.log(showName("Teo"))

// function showName(name) {
//     console.log(name)
// }


// npm i -g nodemon : Thư viện nodemon

// 3 : Object 

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// console.log(teo['name']['a'])

// 4 : Array (Lớp đối tượng duyệt theo dạng danh sách)

// const arrNames = ["Teo","Ti","Tun","Tuan"]
// arrNames[0] = "Toan"
// console.log(arrNames[0])

// 5 : Operator
// var a = 5
// var b = 10

// var ketqua = a++ - --b + --b + b-- - ++a + --b;
// 5 - --b + --b + b-- - ++a + --b  a = 6 , b = 10
// 5 - 9 + --b + b-- - ++a + --b  a = 6 , b = 9
// 5 - 9 + 8 + b-- - ++a + --b  a = 6 , b = 8
// 5 - 9 + 8 + 8 - ++a + --b  a = 6 , b = 7
// 5 - 9 + 8 + 8 - 7 + --b  a = 7 , b = 7
// 5 - 9 + 8 + 8 - 7 + 6  a = 7 , b = 6
// -4 + 15 = // 11
// console.log(ketqua)

// 6 : function

// console.log(showName("Teo"))

// function showName(name) {
//     console.log(name)
// }

// 7 : object method

// const teo = {
//     name : 'Nguyễn Văn Tèo',
//     age : 10,
//     showInfo : function () {
//         console.log("Name : " + this.name + "\n" + "Age : " + this.age)
//     }
// }





