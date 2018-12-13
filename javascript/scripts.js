//buttons DOM declaration
let calcNumericButton = document.querySelectorAll('.numericButton');
let btnValue = document.form.textView.value;
let dataVid;
const clearOne = document.getElementById("clearOne");
const clearAll = document.getElementById("clearAll");
const equals = document.getElementById("equals");
const operatorSymbols = ["+", "-", "*", "/"];



//operator buttons
const clearLast = function() {
    let inputContent = document.form.textView.value;
    document.form.textView.value = inputContent.substring(0, inputContent.length - 1);
}
const clear = function() {
    document.form.textView.value = "";
}
const equation = function() {
    let exp = document.form.textView.value;
    if (exp) {
        let holdVal = document.form.textView.value;
        document.form.textView.value = eval(exp);
        if (document.form.textView.value == Infinity || document.form.textView.value == NaN){
            document.form.textView.value = holdVal;
            alert( "Error! You can not divide by zero!"); 
            return;
        }
        else {
            return eval(exp);
        }
    }
}

//push number to input
const buttonPushValue = function() {
    console.log("red");
    dataVid = this.getAttribute('value');
    
        insert(dataVid);
}

const init = function() {
    calcNumericButton.forEach(function addClick(x) {
        x.addEventListener("click", buttonPushValue);
    });
    //clear last
    clearOne.addEventListener("click", clearLast);
    //clear all
    clearAll.addEventListener("click", clear);
    //equation
    equals.addEventListener("click", equation);

};


const insert = function(dataVid) {
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length - 1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);

    if (result === dataVid && result === lastInputValue) {
        return dataVid;
    } else {
//        insert(dataVid);
        document.form.textView.value = document.form.textView.value + dataVid;
    }
    
}
init();




//operators
const buttonPlusClick = function() {
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length - 1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);

    if (result === lastInputValue) {
        return inputValue;
    } else {
        insert(dataVid);
    }
}