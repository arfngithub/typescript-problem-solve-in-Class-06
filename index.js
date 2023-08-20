"use strict";
// var i: number= 1;
// var result:number = 2 + 4 + i++;
// var result:number = 2 + 4 + ++i;
//i = i + 1
//i++ //(prefix increment opretor)
//++i //(prefix increment opretor)
//i--//(prefix decrement opretor)
//--i //(prefix increment opretor)
// console.log("i", i);
// console.log("result", result);
// for (let index = 10; index < 20; index++) {
// }
// do {
//     console.log("Abdu Rehman");    
//     i++;
// } while(i<= 30)
// var i:number = 11
// while(i>10) {
//     console.log("Abdu Rehman");    
//     --i;
// }
let sum = 5;
let list = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        console.log("i", i);
        list.push(i);
    }
}
console.log("sum", sum);
