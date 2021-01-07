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

function countOccurrences(arr) {
    const object = arr.reduce(function(accumulator , currentValue){
        if (currentValue in accumulator){
            accumulator[currentValue]++
        }else{
            accumulator[currentValue] = 1
        }
        return accumulator
    },{})
    console.log(object)  
}
countOccurrences(["a", "b", "c", "b", "a", "a"]);

// {a : 3 , b : 2 , c : 1}


