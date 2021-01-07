// 13 : Ham reduce
// const arrNumbers = [1,2,3,4,5]

// const result = arrNumbers.reduce(function(accumulator , currentValue){
//     return accumulator + currentValue
// }, 0 )

// console.log(result)

// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     const resultTotalVote = arr.reduce(function(accumulator , currentValue){
//         if(currentValue.voted){
//             accumulator += 1
//         }
//         return accumulator
//     },0)
//     console.log(resultTotalVote)
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7

// function countOccurrences(arr) {
//     const object = arr.reduce(function(accumulator , currentValue){
//         if (currentValue in accumulator){
//             accumulator[currentValue]++
//         }else{
//             accumulator[currentValue] = 1
//         }
//         return accumulator
//     },{})
//     console.log(object)  
// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]);

// {a : 3 , b : 2 , c : 1}

// 13 : Ham sort

// const arrNumbers = [1,3,5,7,9,11,12,13,14]

// const newArrNumbers = arrNumbers.sort(function(a , b){
//     return b - a
// });
// console.log(newArrNumbers)

// const teo = {
//     name : "Nguyen Van Teo"
// }

// delete teo.name

// console.log(teo)

// 14 : Prototype

// function constructor

// function Person(name , age){
//     this.name = name
//     this.age = age
// }

// Person.prototype.showInfo = function(){
//     console.log(this.name + " , "  + this.age)
// }

// const teo1 = new Person("Nguyen Van Teo", 10)
// const teo2 = new Person("Nguyen Van Teo", 10)

// console.log(typeof Person.prototype)

// 15 : Bieu thuc 3 ngoi
// let a = 5
// let b = 6
// a > b = 1
// a < b = -1
// a == b = 0

// let result = a > b ? 1 : a == b ? 0 : -1
// console.log(result)
