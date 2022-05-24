// simple calculator

const numbers = document.querySelectorAll('[data-number]'),
    operators = document.querySelectorAll('[data-operator]'),
    del = document.querySelector('[data-del]'),
    clear = document.querySelector('[data-clear]'),
    equal = document.querySelector('[data-equal]');
    minus = document.querySelector('.minus');


let firstOperand = document.querySelector('[data-firstoperand]'),
    sign = document.querySelector('[data-sign]'),
    secondOperand = document.querySelector('[data-secondoperand]'),
    result = document.querySelector('[data-result]');


function clearAll() {
    firstOperand.textContent = '';
    sign.textContent = '';
    secondOperand.textContent = '';
}


function delLast() {

    if (firstOperand.textContent && !secondOperand.textContent && !sign.textContent) {
    firstOperand.textContent = firstOperand.textContent.slice(0, -1);
    } 
    if (sign.textContent && !secondOperand.textContent) {
    sign.textContent = sign.textContent.slice(0, -1);
    }
    if (secondOperand.textContent && sign.textContent && firstOperand.textContent) {
    secondOperand.textContent = secondOperand.textContent.slice(0, -1);
    }
}

del.addEventListener('click', delLast)

clear.addEventListener('click', () => {
    clearAll();
    result.textContent = '0'
})

// /./.test(firstOperand.textContent)

numbers.forEach(el => {
    el.addEventListener('click', (e) => {
        if(!sign.textContent ) {
           firstOperand.textContent += e.target.textContent;
    }
        if (sign.textContent) {
           secondOperand.textContent += e.target.textContent;
        }

    })
})




operators.forEach(el => {
    el.addEventListener('click', (e) => {

        if (firstOperand.textContent && sign.textContent && e.target.textContent == '-') {
            secondOperand.textContent = minus.textContent
            console.log(e.target.textContent)
        }

        if (firstOperand.textContent.length >= 1 || sign.textContent && secondOperand.textContent == '5') {
        sign.textContent = e.target.textContent;
        }
        if (!firstOperand.textContent && e.target.textContent == '-') {
            firstOperand.textContent = minus.textContent  
        }

    })
})

equal.addEventListener ('click', () => {

    switch (sign.textContent) {
        case '+':
            result.textContent = +firstOperand.textContent + +secondOperand.textContent;
            clearAll()
            break;
        case '-':
            result.textContent = +firstOperand.textContent - +secondOperand.textContent;
            clearAll()
            break;
        case '*':
            result.textContent = +firstOperand.textContent * +secondOperand.textContent;
            clearAll()
            break;
        case '/':
            result.textContent = +firstOperand.textContent / +secondOperand.textContent;
            clearAll()
            break;
        
    }

})




