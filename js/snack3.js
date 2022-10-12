'use strict';



let intNumbers = [];

for (let i = 1; i <= 10; i++) {

    let number = i;

    intNumbers.push(number);

}

console.log(intNumbers);

let sum = 0;
let text = document.querySelector('span');

for (let c = 0; c < intNumbers.length; c++) {

    if (c % 2 != 0) {
        sum += intNumbers[c];
    }

}

text.innerHTML = sum;


