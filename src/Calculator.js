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
            if(operator.value == "+") {
                addition();
            }
            else if(operator.value == "-") {
                subtraction();
            } else {
                equals();
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

/* Not EventListeners */

function inputDisplay(number) {
    let display = document.querySelector('#display');
    if(display.textContent == "+" || display.textContent == "-"){
        display.textContent = "";
    };
    display.textContent += number;
};

function addition() {
    let display = document.querySelector('#display');
    result.push(Number(display.textContent));
    result.push("+");
    display.textContent = "+"; 
};

function subtraction() {
   let display = document.querySelector('#display');
   result.push(Number(display.textContent));
   result.push("-");
   display.textContent = "-";
}

function equals() {
    if(result[result.length - 1] != "+" || 
    result[result.length -1] != "-") {
        let display = document.querySelector('#display');
        result.push(Number(display.textContent));
    };
    let sum = 0;
    for(i = 0; i < result.length; i++) {
        if(i == 0) {
            sum = result[i];
        }
        else if(result[i] == "+") {
            sum += result[i + 1];
        }
        else if(result[i] == "-") {
            sum -= result[i + 1];
        }
    }
    let display = document.querySelector('#display');
    display.textContent = sum;
};

function clearAllContent() {
     result = [];
     let display = document.querySelector('#display');
     display.textContent = "";
}