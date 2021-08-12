// const input = document.querySelector('.text-input');
// const form = document.querySelector('.form');
// const passwordError = document.querySelector('.password-error');
// const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// input.addEventListener('input', (event) => {
//     let includesNumber = false;
//     numbers.forEach(number => {
//         if(event.target.value.includes(number)) {
//             includesNumber = true;
//         }
//     });
//     if(includesNumber) {
//         passwordError.classList.add('d-none');
//     }else {
//         passwordError.classList.remove('d-none');
//     }
// });

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
// });


const button = document.querySelector('.button');
// const division = document.querySelector('.division');
// const main = document.querySelector('main');

// button.onclick = function (e) {
//     console.log('buttona clicklediler');
//     e.stopPropagation();
// }

// division.onclick = function (e) {
//     console.log('divisiona clicklediler');
//     e.stopPropagation();
// }

// main.onclick = function () {
//     console.log('maine clicklediler');
// }


// button.onclick = function () {
// }

// button.onclick = function () {
//     console.log('onclick2');
// }

// button.addEventListener('click', f1);


// button.addEventListener('click', f2);

// function f1 () {

// }

// function f2 () {

// }

document.oncontextmenu = function (e) {
    e.preventDefault();
    console.log(e);
}