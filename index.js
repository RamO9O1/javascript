let a = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8];
// Q1.

// let b = a.reduce((g,value)=>{
//     if(value%2==0)
//     {
//         g+= value;
//     }
//     return g;
// },0);
// console.log(b);

//Q2.

let b = [1, 8, 9, 3, 5, 7, 78, 4, 5];

// console.log(newarr(a,b));

// function newarr(a,b) {
// let v =[];
// let l = 0;
// for(let i = 0 ;i<a.length;i++){
//     for(let j = 0 ;j<b.length;j++){
//         if(a[i]===b[j]){
//             v[l]=b[j];
//             b[j]=-1<<10;
//             l++;
//             break;
//         }
//     }
// }
// return v;
// }

//Q3.

// let avg =(a)=>{
//     let avg= 0;
//     for(let i of a){
//         avg +=i;
//     }
//     avg = avg/a.length;
// return avg;
// }
// console.log(avg(a));

// Q4.

// let v = a.map((value,index,array)=>{
//     array.sort((a,b)=>a-b);
//     return value;
// })
// let len = v.length;
// if(len%2==0){
//     let num =(v[Math.floor(len/2)]+v[Math.ceil(len/2)]-1)/2;
//     console.log(num);
// }else{
//     console.log(v[Math.ceil(len/2)-1]);
// }
// Q5


// let esum = 0;
// let osum =0;
// let res1 = b.reduce((index,value,array)=>{
//     if(value%2==0){
//         esum+=value;
//     }else{
//         osum+=value;
//     }
//     return osum>esum?osum:esum;
// });
// console.log(res1);

// Q6.

// let sum = (a, b) => a + b;
// let sub = (a, b) => Math.abs(a - b);
// let multi = (a, b) => a * b;
// let div = (a, b) => a / b;
// let cal =(a,b,work)=>{ return work(a,b)};
// let input = prompt("Enter the Task \n sum \n multi \n div \n sub");
// let a1 = +prompt("Enter the value of: a");
// let b1 = +prompt("Enter the value of: b");
// switch (input) {
//   case "sum":
//     console.log(cal(a1, b1, sum) );

//     break;
//   case "sub":
//     console.log(cal(a1, b1, sub) );

//     break;
//   case "multi":
//     console.log(cal(a1, b1, multi));

//     break;
//   case "sum":
//     console.log(cal(a1, b1, div));

//     break;

//   default:
//     console.log("Didn't select any option");
//     break;
// }

// Q7.

// a =[2,8,6,24,89,98,3,69,4,23,9];
// let g = a[0];
// let s = a[0];
// if(a.length>0){
//     let res = a.reduce((a,value)=>{
//         if(g<value){
//             g= value;
//         }
//         if(s>value){
//             s= value;
//         }
//         return g + " -->big && small-->   " + s;
//     },0);
//     console.log(res);

// }else{
//     console.log(0);
// }

// Q8

// let num = +prompt("Enter the number to check for Armstrong num");
// armstrong(num);
// function armstrong(num) {
//     var num1 = num;
//     let len = Math.floor(Math.log10(num) + 1);
//     let sum = 0;
//     while (num > 0) {
//         let rem = num % 10;
//         sum += Math.pow(rem, len);
//         num = Math.floor(num / 10);
//     }
//     if (num1 == sum) {
//         return (alert("Armstrong Number--> " + num1));
//     } else {

//         return (alert("Not a Armstrong Number--> " + num1));
//     }
// }

// Q9.

// let f = 7;
// let res = (num)=>{
//     pow=1;
//     while(num>0){
//         pow*=num--;
//     }
//     return pow;
// }
// console.log(res(f));

// Q10.

// let s = 10;
// let a1 = 0;
// console.log(a1);
// let b1 = 1;
// console.log(b1);
// for(let i = 0 ; i <s-2;i++){
//     let c = a1 + b1;
//     console.log(c);
//     a1 = b1 ;
//     b1= c;
// }

// Q11.

// let d = prompt("enter the sorting order \n asc \n desc")
// let order = (arr, b1)=>{
//     if(b1=="asc"){
//         arr.sort((a,b)=>a-b);
//         return arr;
//     }else{
//         arr.sort((a,b)=>b-a)
//         return arr;
//     }
// }
// console.log(order(b,d));

// Q12.

// b.sort((a,b)=>a-b);
// console.log(b[b.length-2]);

// Q13.

// let b1 = 121;
// let palindrimecheck = (num) => {
//     var b = num;
//     let length = Math.floor(Math.log10(num) + 1);
//     let count = 0;
//     while (num > 0) {
//         let end = num % 10;
//         let start = Math.floor(num / Math.pow(10, --length));
//         num = Math.floor((num - start * Math.pow(10, length)) / 10);
//         length = length - 1;
//         if (end == start) {
//             continue;
//         } else {
//             count++;
//             break;
//         }

//     }
//     if (count == 0) {
//         console.log("Palindrome Number--> " + b);
//     } else {
//         console.log("Not a Palindrome Number-->" + b);
//     }
// }

// palindrimecheck(b1);

//  let obj ={name:"abc",age:21};
//  let{name, age}= obj;
//  console.log(name,age);
//  function details({name,age}){
//     console.log(name);
//     console.log(age);
//     return 1;
//  }
//  let abb =details(obj);
//  console.log(abb);
//  let arr=[10,20,30,40,50];
//  let[a1,b1,c,d,e,f]=arr;
//  console.log(a1,b1,c,d,e,f);
//  function d1 ([a1,b1,c,d,e,f]){
//     console.log(a1,b1,c,d,e,f);
//     return "null";
//  }
//  let as = d1(arr);
//  console.log(as);
// let arr2 =[...arr];
// console.log(arr2);
// let ob1 = {...obj};
// console.log(ob1);
//Create a fun which can accept n no of argument and print only String type of literal
// let arr = [10,20,30,"Heello",true,100,10]
// function fun(...d){

// }
// fun(arr);