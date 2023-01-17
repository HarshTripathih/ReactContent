// function curryingSum(a) {
//     return function y(b) {

//         return function z(c) {
//             return a + b + c
            
//         }

//     }
// }
// console.log(curryingSum(10)(20)(30)) //sum 60

let sum = (a) => {
    let result;
    return function(b){
        if(b){
            result = a + b 
            return sum(result)
        }
        return a
    }
}
console.log(sum(10)(40)(60)())