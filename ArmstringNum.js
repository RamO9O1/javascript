let num =+prompt("Enter the number to check for Armstrong num");
var num1=num;
let len = Math.floor(Math.log10(num)+1);
let sum = 0;
while(num>0){
    let rem = num%10;
    sum += Math.pow(rem,len);
    num = Math.floor(num/10);
}
if(num1==sum){
    console.log(alert("Armstrong Number--> "+num1));
}else{
    
    console.log(alert("Not a Armstrong Number--> "+num1));
}