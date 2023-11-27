const calculator = document.querySelector('.calculator')

const allBtns = document.querySelectorAll('.button')
const operatorBtns = document.querySelectorAll('.operator')
const equlsBtn = document.querySelector('.equals')
const clearEntryBtn = document.querySelector('.clear-entry')
const clearBtn = document.querySelector('.clear')
const prevVal = document.querySelector('.prev-value')
const currentVal = document.querySelector('.current-value')
const backspace = document.querySelector('.delete')

// adding a number to the display
allBtns.forEach(button => {
    button.addEventListener('click', eve => {
        const disVal = currentVal.textContent;
        const clicked = eve.target
        const clickedVal = clicked.textContent
        
        if(clicked.dataset.type ==="number") {
            // console.log(clicked);
            if(disVal === '0') {
                currentVal.textContent = clickedVal
            } else if (calculator.dataset.previousDataType === 'operator'){
                currentVal.textContent = clickedVal;

            } else {
                currentVal.textContent += clickedVal
            }
        
        calculator.dataset.previousDataType = 'number'
        }


        if(clicked.dataset.type ==="operator") {
            calculator.dataset.previousDataType = 'operator'
            prevVal.textContent = disVal + " " + clickedVal

            calculator.dataset.firstNumber = disVal;
            calculator.dataset.operatorType = clicked.dataset.key
            
        }

        if(clicked.dataset.type === "equal") {
            calculator.dataset.previousDataType = 'equal'
            const firstNum = parseInt(calculator.dataset.firstNumber)
            const secondNum = parseInt(disVal)
            const operator = calculator.dataset.operatorType

            if(operator === 'plus') return currentVal.textContent = firstNum + secondNum;
            if(operator === 'minus') return currentVal.textContent = firstNum - secondNum;
            if(operator === 'times') return currentVal.textContent = firstNum * secondNum;
            if(operator === 'divide') return currentVal.textContent = firstNum / secondNum;
            
        }

        if(clicked.dataset.type === "clear") {
            calculator.dataset.previousDataType = 'clear'
            prevVal.textContent = "";
            currentVal.textContent = "0"
        }

        if(clicked.dataset.type === "delete") {
            if(calculator.dataset.previousDataType === 'equal'){
                prevVal.textContent = "";
            } else {
                currentVal.textContent = disVal.slice(0,-1)
            }
    
            calculator.dataset.previousDataType = 'delete'


        }


    })
})




