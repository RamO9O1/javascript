let num = 121;
var b = num;
let length = Math.floor(Math.log10(num) + 1);
let count = 0;
while (num > 0) {
    let end = num % 10;
    let start = Math.floor(num / Math.pow(10, --length));
    num = Math.floor((num - start * Math.pow(10, length)) / 10);
    length = length - 1;
    if (end == start) {
        continue;
    } else {
        count++;
        break;
    }

}
if (count == 0) {
    console.log("Palindrome Number--> " + b);
} else {
    console.log("Not a Palindrome Number-->" + b);
}
