console.log(4096 % 12)
console.log(typeof null === "object")

console.log('James'[0])

console.log("green" > "blue")
let joke = "Why couldn't the shoes go out and play \n They were all tied up! \n"
console.log(joke)
//var haiku = "Blowing from the west \n Fallen leaves gather \n In the east.\n";
var haiku ="Blowing from the west" + "\n Fallen leaves gather" + "\n In the east.\n";
console.log(haiku);

function sumOfNumbers(arr){
    const sum = arr.reduce((acc, value) => acc + value, 0)
    return sum;
}
console.log(sumOfNumbers([1,3,4]))