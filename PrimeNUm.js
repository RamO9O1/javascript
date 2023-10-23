let num =+prompt("Enter the num to check for prime number");
var count = 0;

if(Math.abs(num)>1){
    if(num==2){
        console.log(alert("Prime Num--> "+num));
        
    }else{
        for(let i = 2;i<=Math.floor(Math.sqrt(num));i++){
            if(num%i==0){
                count++;
            }
        }
        
        if(count==0){
            console.log(alert("Prime Num--> "+num));
        }else{
            console.log(alert("Not a Prime Num--> "+num));
        }
    }
    
}
else{
    console.log(alert("Not a Prime Num--> "+num));
}