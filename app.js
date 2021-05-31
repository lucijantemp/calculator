// ---SELECTS---

// select all buttons from DOM
const btnClear      = document.querySelector("#btn-clear");
const btnDivide     = document.querySelector("#btn-divide");
const btnMultiply   = document.querySelector("#btn-multiply");
const btnDelete     = document.querySelector("#btn-delete");
const btn7          = document.querySelector("#btn-7");
const btn8          = document.querySelector("#btn-8");
const btn9          = document.querySelector("#btn-9");
const btnSubtract   = document.querySelector("#btn-subtract");
const btn4          = document.querySelector("#btn-4");
const btn5          = document.querySelector("#btn-5");
const btn6          = document.querySelector("#btn-6");
const btnPlus       = document.querySelector("#btn-plus");
const btn1          = document.querySelector("#btn-1");
const btn2          = document.querySelector("#btn-2");
const btn3          = document.querySelector("#btn-3");
const btnEquals     = document.querySelector("#btn-equals");
const btnPercentage = document.querySelector("#btn-percentage");
const btn0          = document.querySelector("#btn-0");
const btnComma      = document.querySelector("#btn-comma");

// select screen output container
const screenOutput = document.querySelector("#screen-output");
const screenOutputSec = document.querySelector("#screen-output-secondary")

// define max input
const maxDigits = 10;

// select all number btns
const numBtns = document.querySelectorAll(".number");

// select all operator btns
const operatorBtns = document.querySelectorAll(".btn-operator")

// initialize first and second number variables (will dynamicly change)
let fNum
let sNum
let operator


// ---BUTTONS---

// clear button
btnClear.addEventListener("click", () => {
    screenOutput.innerHTML = "" 
    screenOutputSec.innerHTML = ""
});

// del button
btnDelete.addEventListener("click", () => {
    screenOutput.innerHTML = screenOutput.innerHTML.slice(0, -1);
})

// number btns
numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        screenOutput.innerHTML += btn.id[4];
    })
})

// comma button
btnComma.addEventListener("click", () => {
    screenOutput.innerHTML += ".";
})

// percentage button
btnPercentage.addEventListener("click", () => {
    screenOutput.innerHTML += "%"
})

// operator buttons
operatorBtns.forEach( btn => {
    btn.addEventListener("click", () => {
        // check if first number is valid
        if (isValidNumber(screenOutput.innerHTML)) {
            fNum = screenOutput.innerHTML
            operator = btn.id
            screenOutputSec.innerHTML = screenOutput.innerHTML + " " + btn.innerHTML
            screenOutput.innerHTML = ""
        } else {
            console.log("wrong input")
        }
    })
})

btnEquals.addEventListener("click", () => {
    if (isValidNumber(screenOutput.innerHTML)) {
        sNum = screenOutput.innerHTML
        console.log(fNum, sNum, operator)
    } else {
        console.log("fucked up input")
    }
})



// ---FUNCTIONS---

// counts number of digits and returns true if number is less than max
function digitsLessTMax(number) {
    let counter = 0;
    for (let i=0; i<number.length; i++) {
        if (!isNaN(number[i])) {
            counter += 1;
        }
    }
    return counter < maxDigits;
}

// checks if input is a valid number
function isValidNumber(string) {
    // regular expression for a valid number
    const re = /^(0|[1-9]\d*)(\.\d+)?\%?$/
    return re.test(string)
}