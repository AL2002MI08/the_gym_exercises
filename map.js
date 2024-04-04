const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//forEach method example
const array = [1, 2, 3, 4];

array.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
