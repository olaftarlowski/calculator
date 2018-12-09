//buttons DOM declaration
const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonZero = document.getElementById("buttonZero");

const equals = document.getElementById("equals");
const buttonPlus = document.getElementById("buttonPlus");
const buttonMinus = document.getElementById("buttonMinus");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonDivide = document.getElementById("buttonDivide");

const clearOne = document.getElementById("clearOne");
const clearAll = document.getElementById("clearAll");

const operatorSymbols = ["+", "-", "*", "/"];
//push number to input
const insert = function(num){
    document.form.textView.value = document.form.textView.value + num;
}


//buttons actions
const buttonSevenClick = function (){
    insert(7);
}
const buttonEightClick = function (){
    insert(8);
}
const buttonNineClick = function (){
    insert(9);
}
const buttonFourClick = function (){
    insert(4);
}
const buttonFiveClick = function (){
    insert(5);
}
const buttonSixClick = function (){
    insert(6);
}
const buttonOneClick = function (){
    insert(1);
}
const buttonTwoClick = function (){
    insert(2);
}
const buttonThreeClick = function (){
    insert(3);
}
const buttonZeroClick = function (){
    insert(0);
}
//operators
const buttonPlusClick = function (){
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length-1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);
    
    if (result === lastInputValue){
            return inputValue;
        }
        else {
            insert("+");
        }
}
const buttonMinusClick = function (){
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length-1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);
    
    if (result === lastInputValue){
            return inputValue;
        }
        else {
            insert("-");
        }
}
const buttonMultiplyClick = function (){
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length-1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);
    
    if (result === lastInputValue){
            return inputValue;
        }
        else {
            insert("*");
        }
}
const buttonDivideClick = function (){
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length-1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);
    
    if (result === lastInputValue){
            return inputValue;
        }
        else {
            insert("/");
        }
}
//equals
const equation = function(){
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}

//clear input
const clear = function(){
    document.form.textView.value = "";
}

//clear last sign
const clearLast = function(){
    let inputContent = document.form.textView.value;
    document.form.textView.value = inputContent.substring(0, inputContent.length-1);
}

// initialization function
const init = function(){
    buttonSeven.addEventListener("click", buttonSevenClick);
    buttonEight.addEventListener("click", buttonEightClick);
    buttonNine.addEventListener("click", buttonNineClick);
    buttonFour.addEventListener("click", buttonFourClick);
    buttonFive.addEventListener("click", buttonFiveClick);
    buttonSix.addEventListener("click", buttonSixClick);
    buttonOne.addEventListener("click", buttonOneClick);
    buttonTwo.addEventListener("click", buttonTwoClick);
    buttonThree.addEventListener("click", buttonThreeClick);
    buttonZero.addEventListener("click", buttonZeroClick);
    
    //clears
    clearOne.addEventListener("click", clearLast);
    clearAll.addEventListener("click", clear);
    
    //equation
    equals.addEventListener("click", equation);
    
    //operators
    buttonPlus.addEventListener("click", buttonPlusClick);
    buttonMinus.addEventListener("click", buttonMinusClick);
    buttonMultiply.addEventListener("click", buttonMultiplyClick);
    buttonDivide.addEventListener("click", buttonDivideClick);
}

init();