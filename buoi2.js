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

function multiply(arr) {
    var result = 1
    for(var value of arr){
        result *= value;
    }
    return result
}

console.log(multiply([2, 3, 4])); // expect: 24
