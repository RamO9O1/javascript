let arr =[1,2,3,5,6,7,8];
arr[10]=10;
let arr1=[];
let arr2 =new Array();
let arr3 =new Array(1,2,5,8,7,5,32);
for(let i in arr){
    console.log("in--> "+arr[i]);
}
for(let val of arr){
    console.log("of--> "+val);
}
arr.forEach(Element => {
console.log("for each--> "+Element);    
});
console.log(arr.size);
console.log("arr--> "+arr.length+" "+"arr1--> "+arr1.length+" "+"arr2--> "+arr2.length+" "+"arr3--> "+arr3.length);
let arr4 =new Array(1,2,5,8,7,5,32);
let index =0;
for(let val of arr4){
        if(val===8){
            console.log("8 index is--> "+index);
            break;
        }
        index++;
}