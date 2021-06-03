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
const btnPercentage = document.querySelector("#btn-sign");
const btn0          = document.querySelector("#btn-0");
const btnComma      = document.querySelector("#btn-comma");

// select screen output container
const screenOutput = document.querySelector(".screen-output");
const screenOutputSec = document.querySelector(".screen-output-secondary")

// define max input
const maxLength = 10;

// select all number btns
const numBtns = document.querySelectorAll(".number");

// select all operator btns
const operatorBtns = document.querySelectorAll(".btn-operator")

// initialize first and second number variables (will dynamicly change)
let fNum
let sNum
let operator = ""


// ---BUTTONS---

// clear button
btnClear.addEventListener("click", () => {
    resetAll()
});

// del button
btnDelete.addEventListener("click", () => {
    screenOutput.innerHTML = screenOutput.innerHTML.slice(0, -1);
})

// number btns
numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (screenOutput.innerHTML.length < maxLength) {
            screenOutput.innerHTML += btn.id[4];            
        }
    })
})

// comma button
btnComma.addEventListener("click", () => {
    if (screenOutput.innerHTML.length < maxLength) {
        screenOutput.innerHTML += ".";
    }
})

// sign button
btnPercentage.addEventListener("click", () => {
    if (screenOutput.innerHTML.length < maxLength) {
        if (screenOutput.innerHTML[0] == "-") { 
            screenOutput.innerHTML = screenOutput.innerHTML.substring(1) 
        } else {
            screenOutput.innerHTML = "-" + screenOutput.innerHTML
        }
    }
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
            resetAll()
        }
    })
})

btnEquals.addEventListener("click", () => {
    // check if second number is valid
    if (isValidNumber(screenOutput.innerHTML)) {
        sNum = screenOutput.innerHTML
    } else {
        resetAll()
    }

    // convert fnum and snum to float type
    fNum = parseFloat(fNum)
    sNum = parseFloat(sNum)

    let result = ""
    switch (operator) {
        case "btn-divide":
            result = (fNum / sNum).toFixed(2)
            break
        case "btn-multiply":
            result = (fNum * sNum).toFixed(2)
            break
        case "btn-subtract":
            result = (fNum - sNum).toFixed(2)
            break
        case "btn-plus":
            result = (fNum + sNum).toFixed(2)
            break
        default:
            resetAll()
            break
    }

    // check if result is valid number (no errors during calculation)
    resetAll() // reset old variables to prevent unexpected behaviour after clicking equals several times
    if (isValidNumber(result)) {
        // check if number is int to remove decimal point
        if (result % 1 == 0) {
            screenOutput.innerHTML = parseInt(result)
        } else { 
            screenOutput.innerHTML = result
        }
    }
})



// ---FUNCTIONS---

// checks if input is a valid number
function isValidNumber(string) {
    // regular expression for a valid number
    const re = /^-?(0|[1-9]\d*)(\.|\.\d+)?$/
    return re.test(string)
}

// resets all variables, will use it to handle errors mostly and for clear button
function resetAll() {
    screenOutput.innerHTML = "" 
    screenOutputSec.innerHTML = ""
    fNum = 0
    sNum = 0
    operator = ""
}