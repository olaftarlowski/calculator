//buttons DOM declaration
const buttonSeven = document.getElementById("buttonSeven");

//push number to input
const insert = function(num){
    document.form.textView.value = document.form.textView.value + num;
}


//buttons actions
const buttonSevenClick = function (){
    insert(7);
}

//equals
const equals = function(){
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}
//clear input
const clear = function(){
    document.form.textView.value = "";
}

// initialization function
const init = function(){
    buttonSeven.addEventListener("click", buttonSevenClick);
}

init();