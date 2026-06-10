const clearBtn = document.getElementById('clear-button')
const deleteBtn = document.getElementById('delete-button')
const divideBtn = document.getElementById('divide-button')
const multiplyBtn = document.getElementById('multiply-button')
const substractBtn = document.getElementById('substract-button')
const addBtn = document.getElementById('add-button')
const decimalBtn = document.getElementById('decimal-button')
const equalBtn = document.getElementById('equal-button')
const numberBtns = document.querySelectorAll('.number')
const resultElement = document.getElementById('result')

//initialize the variables
let result = '';
let operation = '';
let previousOperand = 0;


//Append number
const appendNumber = (number) => {
    result += number
    resultElement.innerText = result
}

//Add event listener to number buttons
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.innerText)
        appendNumber(button.innerText);
        
    })
})

const appendAdd = (add) => {
    result += add
    resultElement.innerText = result
}

//add event listener to operator
addBtn.for(button => {

    button.addEventListener('click', () => {
        console.log('clicked')
        appendAdd(button.innerText)
    })
})