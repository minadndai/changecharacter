function changeFunction() {
    var original = document.getElementById("text").innerHTML; 
    var final = original.replace(/difficult/g, "easy");
    document.getElementById("text").innerHTML = final;
}

function clearFunction() {
    var final = document.getElementById("text").innerHTML; 
    var original = final.replace(/easy/g, "difficult");
    document.getElementById("text").innerHTML = original;
}

