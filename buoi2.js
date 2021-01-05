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

// 10 : Call back
// const arr = [5,10,15,20,25]

// function doubleValue(number) {
//     return number * number
// }
// function calculateArr(arr , cb) {
//     var result = 0
//     for(var value of arr){
//         result += value
//     }
//     return cb(result)
// }

// console.log(calculateArr(arr , doubleValue))

// 11 : Array method
// const numbers  = [1,2,3]

// Thêm phần tử vào cuối mảng
// numbers.push(4,5,6)
// Thêm phần tử ở đầu mảng
// numbers.unshift(4)
// Xóa phần tử ở cuối mảng
// numbers.pop()
// Xóa phần tử ở đầu mảng
// numbers.shift()
// Thêm hoặc xóa phần tử giữa mảng
// numbers.splice(numbers.length,0,1.1)
// console.log(numbers)

// 12 : Map (Convert)
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers =  numbers.map(function(value , index ){
//     if (value % 2 == 0){
//         return value / 2
//     }
//     return value
// })

// console.log(newNumbers)

// Make an array of strings of the names
// function namesOnly(arr) {
//     const newArr = arr.map(function(person , index){
//         return person.name
//     })
//     console.log(newArr)
// }

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers =  numbers.map(function(value , index ){
//     if (value % 2 == 0){
//         return value / 2
//     }
//     return value
// })

// console.log(newNumbers)

// Array.prototype.myMap = function(cb){
//     const newArr = []
//     for (var i = 0 ; i < this.length ; i++){
//         newArr.push(cb(this[i] , i))
//     }
//     return newArr
// }

// const newNumbers =  numbers.myMap(function(value , index ){
//     if (value % 2 == 0){
//         return value / 2
//     }
//     return value
// })

// console.log(newNumbers)


// 12 : Ham filter

// Ví dụ

const arrPersons = [
    {name : 'Teo' , age : 10},
    {name : 'Ti' , age : 12},
    {name : 'Tun' , age : 13},
    {name : 'Hoa' , age : 14},
]

const newArrPersons = arrPersons.filter(function(person , index){
    if (person.age % 2 == 0 ){
        return true
    }
    return false
})
console.log(newArrPersons)
