//1
let i = 3;

while (i) {
  alert( i-- );
}

//2
let i = 0;
while (++i < 5) alert( i ); //1 to 4

let i = 0;
while (i++ < 5) alert( i ); //1 to 5

//3 (0 to 4)
for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );

//4
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//5
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//6, using a label:
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

//or a nested loop:

//For each i in the interval {
//  check if i has a divisor from 1..i
//  if yes => the value is not a prime
//  if no => the value is a prime, show it
//}