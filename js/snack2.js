'use strict';

let names = ['Luca ', 'Marco ', 'Giulia ', 'Antonio '];

let lastNames = ['Ferrari ', 'Russo ', 'Bianchi ', 'Romano '];

//console.log(names, lastNames);


let list = [];


for (let i = 0; i < 4; i++) {


    let completeName = names[Math.floor(Math.random() * 4)] + lastNames[Math.floor(Math.random() * 4)];
    list.push(completeName);
}


const output = document.querySelector('ul');

//console.log(output);

for (let o = 0; o < list.length; o++) {

    let myText = document.createElement('li');

    myText.innerHTML = list[o];

    output.append(myText);
}


//console.log(list);