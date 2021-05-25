// SELECT ELEMENTS FROM DOM

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

// define max input
const maxDigits = 10;

// select all number btns
const numBtns = document.querySelectorAll(".number");



// BUTTONS FUNCTIONALITIES

// clear button functionality
btnClear.addEventListener("click", () => {
    screenOutput.innerHTML = "" 
});

// del button functionality
btnDelete.addEventListener("click", () => {
    screenOutput.innerHTML = screenOutput.innerHTML.slice(0, -1);
})

// number btns functionality
numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // check if num of digits is less than max and last char is not %
        if (digitsLessTMax(screenOutput.innerHTML) && screenOutput.innerHTML.slice(-1) != "%") {
            screenOutput.innerHTML += btn.id[4];
        }
    })
})

// comma button functionality
btnComma.addEventListener("click", () => {
    if (digitsLessTMax(screenOutput.innerHTML) && !charInString(screenOutput.innerHTML, ".") && screenOutput.innerHTML.slice(-1) != "%") {
        screenOutput.innerHTML += ".";
    }
})

// percentage button functionality
btnPercentage.addEventListener("click", () => {
    if (digitsLessTMax(screenOutput.innerHTML) && !charInString(screenOutput.innerHTML, "%") && screenOutput.innerHTML.slice(-1) != "." && screenOutput.innerHTML.length != 0) {
        screenOutput.innerHTML += "%"
    }
})


// FUNCTIONS

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

// counts number of commas and returns true if number is 0
function charInString(string, char) {
    return string.includes(char)
}