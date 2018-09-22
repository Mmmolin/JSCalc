let result = [];
loadEventListeners();


/* EventListeners */
function loadEventListeners() {
    number();
    operator();
    clear();
};

function number() {
    let numbers = document.querySelectorAll('.number');
    numbers.forEach(function(number) {
        number.addEventListener('click', function() {
            inputDisplay(number.value);
        });
    });
};

function operator(){
    let operators = document.querySelectorAll('.operator');
    operators.forEach(function(operator) {
        operator.addEventListener('click', function() {
            if(operator.textContent == "=") {
                equals();
            } else {
                pushToResult(operator.value);
            }
        });
    });
};

function clear() {
    let clear = document.querySelector('#clear');
    clear.addEventListener('click', function() {
        clearAllContent();
    });
};

function clearEntry() {

};

/* Not EventListeners */

function inputDisplay(number) {
    if(getDisplayText() == "+" || getDisplayText() == "-"
    || getDisplayText() == "/" || getDisplayText() == "×"){
        setDisplayText("");
    };
    display.textContent += number;
};

function getDisplayText(){
    let display = document.querySelector('#display');
    return display.textContent;
}

function setDisplayText(value) {
    let display = document.querySelector('#display');
    display.textContent = value;
}

function pushToResult(operator) {
    result.push(Number(getDisplayText()));
    result.push(operator);
    setDisplayText(operator);
}

function equals() {
    if(result[result.length - 1] != "+" || 
    result[result.length -1] != "-") {
        result.push(Number(getDisplayText()));
    };
    let sum = 0;
    for(i = 0; i < result.length; i++) {        
        if(i != 0) {
            switch(result[i]) {
                case "+":
                    sum = addition(sum, result[i + 1]);
                    break;
                case "-":
                    sum = subtraction(sum, result[i + 1]);
                    break;
                case "/":
                    sum = divide(sum, result[i + 1]);
                    break;
                case "×":
                    sum = multiply(sum, result[i + 1]);
                    break;
            }
        } else {
            sum = result[i];
        }
    }
    setDisplayText(sum);
};

function addition(sum, number) {
    return sum += number;
};

function subtraction(sum, number) {
    return sum -= number;
};

function divide(sum, number) {
    return sum / number;
};

function multiply(sum, number) {
    return sum * number;
};

function clearAllContent() {
     result = [];
     setDisplayText("");
}