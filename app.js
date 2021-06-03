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
const screenOutput = document.querySelector("#screen-output");
const screenOutputSec = document.querySelector("#screen-output-secondary")

// define max input
const maxLength = 13;

// select all number btns
const numBtns = document.querySelectorAll(".number");

// select all operator btns
const operatorBtns = document.querySelectorAll(".btn-operator")

// initialize first and second number variables (will dynamicly change)
let fNum
let sNum
let operator = undefined


// ---BUTTONS---

// clear button
btnClear.addEventListener("click", () => {
    screenOutput.innerHTML = "" 
    screenOutputSec.innerHTML = ""
    fNum = 0
    sNum = 0
    operator = undefined
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
            alert("wrong input")
        }
    })
})

btnEquals.addEventListener("click", () => {
    // handle invalid inputs
    if (isValidNumber(screenOutput.innerHTML)) {
        sNum = screenOutput.innerHTML
    } else {
        alert("fucked up input")
    }

    // convert fnum and snum to float type
    fNum = parseFloat(fNum)
    sNum = parseFloat(sNum)

    let result = undefined
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
        case undefined:
            alert("worng or no operator")
            break
    }

    // update font size based on number size
    if (result.length <= maxLength) {
        screenOutput.style.fontSize = "2rem"
    }
    else if (result.length <= maxLength + 5) {
        screenOutput.style.fontSize = "1.5rem"
    }

    // check if number is int to remove decimal point
    if (result % 1 == 0) {
        screenOutput.innerHTML = parseInt(result)
    } else { 
        screenOutput.innerHTML = result
    }
})



// ---FUNCTIONS---

// checks if input is a valid number
function isValidNumber(string) {
    // regular expression for a valid number
    const re = /^-?(0|[1-9]\d*)(\.|\.\d+)?$/
    return re.test(string)
}