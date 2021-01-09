// 19 : Arrow function
// const arrNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newArrNumbers = arrNumbers.map(function(number , index){
//     return number
// })

// const newArrNumbers = arrNumbers.map((number , index) => {
//     return number * 2
// })
// console.log(newArrNumbers)

// const a = {
//     name : 'AAA',
//     run : function() {
//       var run2 = () => {
//         var run3 = () => {
//             console.log(this.name)
//         }
//         run3()
//       }
//       run2()
//     }
// }
  
// a.run()

//20 : Template string 
// `` : backtick
// let api = 'docs/api'

// let url = `https://developer.mozilla.org/vi/${api}/Web/JavaScript/Closures`
  
// console.log(url)

// 21 : Argument 

// Array like object
// const number = {
//     0 : 1,
//     1 : 2,
//     length : 2
// }

// const newArrNum = Array.from(number)
// console.log(newArrNum)

// function tinhTong(){
//     const arr = Array.from(arguments)
//     return arr.reduce((accumulator , currentValue) => {
//         return accumulator + currentValue
//     },0)
// }
// console.log(tinhTong(1,2,3,4,5,6))

// 21 : Default parameter

// function tinhTong(a , b = 0){
//     return a + b
// }
// console.log(tinhTong(1))

// 22 : Call
// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age}`)
//   }
// greeting.call(null , 'Tom' , 10)
  