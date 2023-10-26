let [, , ...sumArray] = process.argv;

let total = 0;

sumArray.forEach(num => {
  let toAdd = Number(num);
  total += toAdd;
});

console.log(total);