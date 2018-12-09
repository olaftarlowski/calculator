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



// initialization function
const init = function(){
    buttonSeven.addEventListener("click", buttonSevenClick);
}

init();