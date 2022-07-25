function checkEven(num){
    return num%2===0 ;
}

function checkOdd(num){
    return num%2!==0 ;
}

function divisibleBy5(num){
    return num%5===0 ;
}

function divisibleBy3(num){
    return num%3===0 ;
}


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] ;

var filter = function(array,func){
    var filteredArray = [] ;
    for(var nums of array){
        if(func(nums)){
            filteredArray.push(nums) ;
        }
    }
    return filteredArray
}
console.log(filter(array,checkEven)) ;
console.log(filter(array,checkOdd)) ;
console.log(filter(array,divisibleBy5)) ;
console.log(filter(array,divisibleBy3)) ;

