/*
    1. membuat bilangan prima
*/

function prime(num) {
  //code here
  let result = [];
  for (let i = 2; i <= num; i++) {
    let isPrima = true;
    for (let j = 2; j <= i; j++) {
      if (j !== i && i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      result.push(i);
    }
  }
  return result;
}

console.log(prime(10));
// console.log(prime(27));
// console.log(prime(49));
