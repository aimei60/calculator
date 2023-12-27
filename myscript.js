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
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const divide = document.querySelector(".divide")
const multiply = document.querySelector(".multiply")
const decimal = document.querySelector(".decimal")
const equal = document.querySelector(".equals")

let firstOperand = 0;
let secondOperand = 0;
let currentOperator = null;

function updateDisplay(value) {
    display.textContent = value
}

decimal.addEventListener('click', function() {
    if (!display.textContent.includes(".")) {
        display.append(".");
    }
});


zero.addEventListener('click', function() {
    display.append(0);

});

one.addEventListener('click', function() {
    display.append(1);
});

two.addEventListener('click', function() {
    display.append(2);
});

three.addEventListener('click', function() {
    display.append(3);
});

four.addEventListener('click', function() {
    display.append(4);
});

five.addEventListener('click', function() {
    display.append(5);
});

six.addEventListener('click', function() {
    display.append(6);
});

seven.addEventListener('click', function() {
    display.append(7);
});

eight.addEventListener('click', function() {
    display.append(8);
});

nine.addEventListener('click', function() {
    display.append(9);
});

clear.addEventListener('click', function(){
    display.textContent = " ";
    firstOperand = 0;
    secondOperand = 0;
    currentOperator = null;
});

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


equal.addEventListener('click', function(){


});



console.log(operate(5, 2, subtraction))

