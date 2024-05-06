function blank(){
    document.getElementById("screen").value = " ";
}

function show(value){
    document.getElementById("screen").value += value;
}

function solve(){
    var x = document.getElementById("screen").value;
    var y = eval(x);
    document.getElementById("screen").value = y;
}