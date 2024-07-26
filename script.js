let display = document.querySelector(".resultSection")
let point = document.querySelector(".point")
let percentage = document.querySelector(".percentage")
let plusminus = document.querySelector(".plusminus")
let clear = document.querySelector(".ac")
let equal = document.getElementById("equal")

function appendDisplay(input) {
    display.textContent += input
}

function addDecimalPoint() {
    display.append(".")
}

function DecimalPointCheck() {
    if (!display.textContent.includes('.')) {
        addDecimalPoint()
    }
}

point.addEventListener("click", DecimalPointCheck);

percentage.addEventListener("click", function(){
    display.textContent = display.textContent / 100
})

plusminus.addEventListener("click", function(){
    display.textContent = display.textContent * -1
})

function clearDisplay() {
    display.textContent = ""
}

clear.addEventListener("click", clearDisplay)

function caculate() {
    try {
        display.textContent = eval(display.textContent)
    }
    catch(Error) {
        display.textContent = "Error"
    }
    
}

equal.addEventListener("click", caculate)

