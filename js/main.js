
// global variable
var arrayIntegerNumber = [];


function displayArrayNumber(arr, element) {
    var arrayStr = "";
    for (var i = 0; i < arr.length; i++) {
        arrayStr += arr[i] + " ";
    }
    element.innerHTML = arrayStr;
}



function addMoreNumber() {
    var newNumber = Number(document.querySelector("#inputNumber01").value);
    arrayIntegerNumber.push(newNumber);
    displayELE = document.querySelector("#txtArrayInteger");
    displayArrayNumber(arrayIntegerNumber, displayELE);
}