// calculator functions

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

console.log(operate(4, 2, subtraction))