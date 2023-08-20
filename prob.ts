//use 1 console to print sum 

let sum:number = 10;
let list:number [] = []
for (let i=1; i<=100; i++) {
    if (i%5 ==0) {
        sum = sum + i
        console.log("i",i);
        list.push(i)
    }
}
console.log("sum" , sum);
