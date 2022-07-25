var number = [1,2,3,4,5,6,7] ;

var color = ["Red","Green","Blue","Black","Yellow"] ;

// emptyString.
var numStore = "" ;

// ColorFunction.
function collectNumbers(num){
    numStore += num + " " ;
}

// emptyString.
var colorStore = "" ;

// NumberFunction.
function collectColors(col){
    colorStore += col + " " ;
}

// HighOrderFunction.
function forEachArray(array,cb){
    for(var elem of array){
        cb(elem) ;
    }
}

// functionCallForNumber
forEachArray(number,collectNumbers)
console.log(numStore) ;

//FunctionCallForColor
forEachArray(color,collectColors)
console.log(colorStore) ;