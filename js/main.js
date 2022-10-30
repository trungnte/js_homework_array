
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

function sumPositiveNumbers() {
    var sum  = 0;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] > 0) {
            sum += arrayIntegerNumber[i];
        }
    }
    document.querySelector("#txtResultSumPositiveNumbers").innerHTML = sum;
}

function countPositiveNumbers() {
    var count = 0;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] > 0) {
            count++;
        }
    }
    document.querySelector("#txtResultTotalPositiveNumbers").innerHTML = count;
}

function findMin() {
    var min = arrayIntegerNumber[0];
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] < min) {
            min = arrayIntegerNumber[i];
        }
    }
    document.querySelector("#txtResultMin").innerHTML = min;
}

function findMinPositive() {
    var min = -1;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        // check number is positive
        if(arrayIntegerNumber[i] > 0) {
            if(min == -1) {
                min = arrayIntegerNumber[i];
            }
            else {
                if ( min > arrayIntegerNumber[i]) {
                    min = arrayIntegerNumber[i];
                }
            }
        }
    }
    if (min < 0) {
        document.querySelector("#txtResultMinPositive").innerHTML = "Không có số dương trong mảng";
    }
    else {
        document.querySelector("#txtResultMinPositive").innerHTML = min;
    }
}

function findLastEvenNumber() {
    var lastEvenNumber = -1;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] % 2 == 0) {
            lastEvenNumber = arrayIntegerNumber[i];
        }
    }

    // if (lastEvenNumber < 0) {
    //     document.querySelector("#txtResultMinPositive").innerHTML = "Không có số chẵn trong mảng";
    // }
    // else {
        document.querySelector("#txtResultMinPositive").innerHTML = lastEvenNumber;
    // }
}

function swapNumbers() {
    var arrayCopy = [];
    pos1 = Number( document.querySelector("#inputNumber061").value);
    pos2 = Number( document.querySelector("#inputNumber062").value);
    if(pos1 > arrayIntegerNumber.length || pos2 > arrayIntegerNumber.length
        || pos1 <= 0 || pos2 <= 0) {
        document.querySelector("#txtResultSwap2Numbers").innerHTML = 
            "Vị trí vượt độ dài mảng hoặc không hợp lệ";
    }
    else {
        for (var i = 0; i < arrayIntegerNumber.length; i++){
            arrayCopy.push(arrayIntegerNumber[i]);
        }
        temp = arrayCopy[pos1 - 1];
        arrayCopy[pos1 - 1] = arrayCopy[pos2 - 1];
        arrayCopy[pos2 - 1] = temp;
        displayELE = document.querySelector("#txtResultSwap2Numbers");
        displayArrayNumber(arrayCopy, displayELE);
    }
}


function orderAsc() {
    var arrayCopy = [];
    for (var i = 0; i < arrayIntegerNumber.length; i++){
        arrayCopy.push(arrayIntegerNumber[i]);
    }


    displayELE = document.querySelector("#txtResultAscArray");
    displayArrayNumber(arrayCopy, displayELE);
}