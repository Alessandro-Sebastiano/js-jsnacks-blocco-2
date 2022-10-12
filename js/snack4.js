

let smallArray = [];
let bigArray = [];


let outputs = document.querySelectorAll('span');

let btn = document.querySelector('button');

for (let i = 1; i <= 10; i++) {

    bigArray.push(i);

}

for (let i = 1; i <= 4; i++) {

    smallArray.push(i);

}


console.log(smallArray, bigArray);

outputs[0].innerHTML = smallArray;

outputs[1].innerHTML = bigArray;


btn.addEventListener('click', () => {

    if (smallArray.length !== bigArray.length) {

        for (let t = smallArray.length + 1; t <= bigArray.length; t++) {

            smallArray.push(t);

        }

    }


    outputs[2].innerHTML = smallArray;
    console.log(smallArray, bigArray);

});

