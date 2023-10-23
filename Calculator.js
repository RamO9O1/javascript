let sum = (a,b )=> a+b;
let multi = (a,b )=> a*b;
let sub = (a,b )=> a-b;
let div = (a,b )=> a/b;
let cal =(work,a,b)=>{ return work(a,b)};
var work =prompt("Enter the task as sum, multi, sub, div");
let a1 =+prompt("Enter the value of a");
let b1 =+prompt("Enter the value of b");
switch (work) {
    case "sum":
        console.log(cal(sum,a1,b1));
        break;
    case "multi":
        console.log(cal(multi,a1,b1));
        break;
    case "div":
            console.log(cal(div,a1,b1));
            break;
    case "sub":
                console.log(cal(sub,a1,b1));
                break;
    default:
        console.log("Wrong Choice");
}
