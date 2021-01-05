// 8 : Phép so sánh
// var a = {name : "Teo"}
// var b = {name : "Teo"}

// console.log(a == b)

// 9 : Vòng lặp
// const arrNames = ["Teo","Ti","Tun","Tuan","Lan"]

// for(var value of arrNames){
//     console.log(value)
// }

/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     var result = 1
//     for(var value of arr){
//         result *= value;
//     }
//     return result
// }

// console.log(multiply([2, 3, 4])); // expect: 24

// for in
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }

// for (var key in teo){
//     console.log(key)
// }
/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//     bedroom: {
//         area: 20,
//         bed: {
//             type: 'twin-bed',
//             price: 100
//         }
//     }
// };
  
// function getkey(object){
//     for(var key in object){
//        console.log(key)
//        if (typeof object[key] === 'object'){
//            getkey(object[key])
//        }
//     }
// }
  
// getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  