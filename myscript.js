// calculator functions

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const display = document.querySelector(".display")
const clear = document.querySelector(".AC")


function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}


function operate(a, b, operator) {
    return operator(a,b);
}




zero.addEventListener('click', function() {
    display.textContent = "0"
}) 

one.addEventListener('click', function() {
    display.textContent = "1"
})

two.addEventListener('click', function() {
    display.textContent = "2"
})

three.addEventListener('click', function() {
    display.textContent = "3"
})

four.addEventListener('click', function() {
    display.textContent = "4"
})

five.addEventListener('click', function() {
    display.textContent = "5"
})

six.addEventListener('click', function() {
    display.textContent = "6"
})

seven.addEventListener('click', function() {
    display.textContent = "7"
})

eight.addEventListener('click', function() {
    display.textContent = "8"
})

nine.addEventListener('click', function() {
    display.textContent = "9"
})

clear.addEventListener('click', function(){
    display.textContent = " "
})

console.log(operate(4, 2, subtraction))