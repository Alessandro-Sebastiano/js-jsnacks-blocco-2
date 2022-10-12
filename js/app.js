'use strict';

let inputNumber = document.querySelector('input');

let btn = document.querySelector('button');

let printNumber = document.querySelector('span');

console.log(inputNumber);

console.log(printNumber);

btn.addEventListener('click', () => {

    let selectedNumber = +inputNumber.value;

    if (selectedNumber % 2 == 0) {

        printNumber.innerHTML = selectedNumber;

        console.log(selectedNumber);

    } else {

        printNumber.innerHTML = ++selectedNumber;

    }

    inputNumber.value = '';

});


