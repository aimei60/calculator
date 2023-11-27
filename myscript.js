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

decimal.addEventListener('click', function() {
    decimalPoint = "."
    display.append(decimalPoint)
})


zero.addEventListener('click', function() {
    num = 0
    display.append(num)

}) 

one.addEventListener('click', function() {
    num = 1
    display.append(num)
})

two.addEventListener('click', function() {
    num = 2
    display.append(num)
})

three.addEventListener('click', function() {
    num = 3
    display.append(num)
})

four.addEventListener('click', function() {
    num = 4
    display.append(num)
})

five.addEventListener('click', function() {
    num = 5
    display.append(num)
})

six.addEventListener('click', function() {
    num = 6
    display.append(num)
})

seven.addEventListener('click', function() {
    num = 7
    display.append(num)
})

eight.addEventListener('click', function() {
    num = 8
    display.append(num)
})

nine.addEventListener('click', function() {
    num = 9
    display.append(num)
})

clear.addEventListener('click', function(){
    display.textContent = " "
})

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