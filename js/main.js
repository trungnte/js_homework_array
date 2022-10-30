
// global variable
var arrayIntegerNumber = [];


function displayArrayNumber(arr, element) {
    var arrayStr = "";
    for (var i = 0; i < arr.length; i++) {
        arrayStr += arr[i] + " ";
    }
    element.innerHTML = arrayStr;
}

function inputArray(inputELE, arr) {
    var newNumber = Number(inputELE.value);
    arr.push(newNumber);
}

function addMoreNumber() {
    // var newNumber = Number(document.querySelector("#inputNumber01").value);
    // arrayIntegerNumber.push(newNumber);

    inputELE = document.querySelector("#inputNumber01");
    inputArray(inputELE, arrayIntegerNumber);

    displayELE = document.querySelector("#txtArrayInteger");
    displayArrayNumber(arrayIntegerNumber, displayELE);
}


// <!-- Section 1 -->
function sumPositiveNumbers() {
    var sum  = 0;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] > 0) {
            sum += arrayIntegerNumber[i];
        }
    }
    document.querySelector("#txtResultSumPositiveNumbers").innerHTML = sum;
}

// <!-- Section 2 -->

function countPositiveNumbers() {
    var count = 0;
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] > 0) {
            count++;
        }
    }
    document.querySelector("#txtResultTotalPositiveNumbers").innerHTML = count;
}

// <!-- Section 3 -->

function findMin() {
    var min = arrayIntegerNumber[0];
    for (var i = 0; i < arrayIntegerNumber.length; i++) {
        if(arrayIntegerNumber[i] < min) {
            min = arrayIntegerNumber[i];
        }
    }
    document.querySelector("#txtResultMin").innerHTML = min;
}

// <!-- Section 4 -->

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


// <!-- Section 5 -->

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
        document.querySelector("#txtResultLastEvenNumber").innerHTML = lastEvenNumber;
    // }
}

// <!-- Section 6-->

function swap(arr, pos1, pos2) {
    var temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
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
        swap(arrayCopy, pos1 - 1, pos2 -1);
        // var temp = arrayCopy[pos1 - 1];
        // arrayCopy[pos1 - 1] = arrayCopy[pos2 - 1];
        // arrayCopy[pos2 - 1] = temp;
        displayELE = document.querySelector("#txtResultSwap2Numbers");
        displayArrayNumber(arrayCopy, displayELE);
    }
}

// <!-- Section 7 -->
function selectionSort(arr, n) {
    var i, j, minIdx;
    for(i = 0; i < n - 1; i++) {
        minIdx = i;
        for(j = i + 1; j < n; j++){
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }

            swap(arr, i, minIdx);
        }
    }
}

function orderAsc() {
    var arrayCopy = [];
    for (var i = 0; i < arrayIntegerNumber.length; i++){
        arrayCopy.push(arrayIntegerNumber[i]);
    }
    selectionSort(arrayCopy, arrayCopy.length);

    displayELE = document.querySelector("#txtResultAscArray");
    displayArrayNumber(arrayCopy, displayELE);
}

// <!-- Section 8 -->
function isPrime(num) {
    if(num < 0) {
        return false;
    } else if (num == 0 || num == 1 || num == 2){
        return true;
    }
    else {
        for(var i = 2; i <= num/2; i++) {
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}
function findPrime() {
    var firstPrime = -1;
    for(var i = 0; i < arrayIntegerNumber.length; i++){
        if( isPrime(arrayIntegerNumber[i])) {
            firstPrime = arrayIntegerNumber[i];
            break;
        }
    }
    document.querySelector("#txtResultFirstPrime").innerHTML = firstPrime;
}

// <!-- Section 9 -->
var arrayFloatNumber = [];

function addFloatNumber() {
    inputELE = document.querySelector("#inputNumber09");
    inputArray(inputELE, arrayFloatNumber);

    displayELE = document.querySelector("#txtArrayFloat");
    displayArrayNumber(arrayFloatNumber, displayELE);

}

function countInteger() {
    var count = 0;
    for(var i = 0; i < arrayFloatNumber.length; i++) {
        if(Number.isInteger(arrayFloatNumber[i])) {
            count++;
        }
    }
    document.querySelector("#txtResultCountInteger").innerHTML = 
        "Số lượng số nguyên: " + count;
}


// <!-- Section 10 -->
function comparePositiveAndNegative() {
    var cntPositive = 0;
    var cntNegative = 0;
    var resultStr = "";
    for(var i = 0; i < arrayIntegerNumber.length; i++){
        if (arrayIntegerNumber[i] > 0) {
            cntPositive++;
        }
        else  if (arrayIntegerNumber[i] < 0) {
            cntNegative++;
        }
        else {
            // Số 0 là phần tử trung hoà, không âm, không dương
        }
    }
    if(cntPositive > cntNegative) {
        resultStr = "Số dương nhiều hơn số âm";
    } else if(cntPositive < cntNegative) {
        resultStr = "Số dương ít hơn số âm";
    } else {
        resultStr = "Số dương bằng số âm";
    }
    document.querySelector("#txtResultCompareNumbers").innerHTML = resultStr;
}