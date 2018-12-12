//buttons DOM declaration
let calcNumericButton = document.querySelectorAll('.numericButton');
let btnValue = document.form.textView.value;
//let abc = document.querySelector('.numericButton').addEventListener('click', function(){});
let dataVid;
const clearOne = document.getElementById("clearOne");
const clearAll = document.getElementById("clearAll");
const equals = document.getElementById("equals");

    
    

//operator buttons
const clearLast = function(){
    let inputContent = document.form.textView.value;
    document.form.textView.value = inputContent.substring(0, inputContent.length-1);
}
const clear = function(){
    document.form.textView.value = "";
}
const equation = function(){
        let exp = document.form.textView.value;
          if (exp) {
            document.form.textView.value = eval(exp);
  }}

//push number to input
const buttonPushValue = function (){
    console.log("red");
    dataVid = this.getAttribute('value');
    insert(dataVid);
}

const ye = function(){
    calcNumericButton.forEach(function addClick(x){
        x.addEventListener("click", buttonPushValue);
    });
    //clear last
    clearOne.addEventListener("click", clearLast);
    //clear all
    clearAll.addEventListener("click", clear);
    //equation
    equals.addEventListener("click", equation);
    
};


const insert = function(dataVid){
    document.form.textView.value = document.form.textView.value + dataVid;
}
ye();


const operatorSymbols = ["+", "-", "*", "/"];



//operators
const buttonPlusClick = function (){
    let inputValue = document.form.textView.value;
    let lastInputValue = inputValue.substring(inputValue.length-1, inputValue.length);
    let result = operatorSymbols.find(elem => elem === lastInputValue);
    
    if (result === lastInputValue){
            return inputValue;
        }
        else {
            insert(dataVid);
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
            insert(dataVid);
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
            insert(dataVid);
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
           insert(dataVid);
        }
}



// initialization function
//const init = function(){
//    buttonSeven.addEventListener("click", buttonSevenClick);
//    buttonEight.addEventListener("click", buttonEightClick);
//    buttonNine.addEventListener("click", buttonNineClick);
//    buttonFour.addEventListener("click", buttonFourClick);
//    buttonFive.addEventListener("click", buttonFiveClick);
//    buttonSix.addEventListener("click", buttonSixClick);
//    buttonOne.addEventListener("click", buttonOneClick);
//    buttonTwo.addEventListener("click", buttonTwoClick);
//    buttonThree.addEventListener("click", buttonThreeClick);
//    buttonZero.addEventListener("click", buttonZeroClick);
//    
//    //clears

//    
//    //operators
//    buttonPlus.addEventListener("click", buttonPlusClick);
//    buttonMinus.addEventListener("click", buttonMinusClick);
//    buttonMultiply.addEventListener("click", buttonMultiplyClick);
//    buttonDivide.addEventListener("click", buttonDivideClick);
//}

//init();