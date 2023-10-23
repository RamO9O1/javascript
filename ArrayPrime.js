
let arr =[10,20,7,9,15,23,17,30,"Monday","Sunday",true,false,100,977,666]
// Print all String ,Boolean Element present of Array
// Print Prime numbers in Array.
for(let val of arr){
    if(typeof val == "string"){
        console.log(val);
    }
    if(typeof val == "boolean"){
        console.log(val);
    }
}

for(let val of arr){

if(typeof val == "number"){
    let count = 0;
    if(val%2!=0){
      
        for(let i = 2;i<=Math.sqrt(val);i++){
            if(val%i===0){
                count++
                break;
            }
        }
        if(count===0){
            console.log("Prime NUmber "+ val);
        }else{
            console.log("Not A Prime NUmber "+ val);
        }
    }else{
        console.log("Not A Prime NUmber "+ val);
    }
   
}
}