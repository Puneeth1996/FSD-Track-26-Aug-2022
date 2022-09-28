


function greeet() {
    console.log('Welcome to session!');
    console.log('Good Evening All.');
    console.log('Happy Saturday');
}



function greeetPerson(person, time) {
    console.log('Welcome to session! Hello, ' + person);
    console.log('Good Evening All.');
    console.log('We are at ' + time);
}


function powerOfNum( baseNumber, power ) {
    return Math.pow(baseNumber, power )
}


// Funciton for reversion of string 

function reverseString(str) {
    return(str.split('').reverse().join(''));
}


// Function to return the count of characters
function countOfCharacter(str, characterToCount) {
    // wild life in africa
    // count of character i : 4
    // console.log(str.split(''))
    var count = 'test';
    for(let charInStr of str.split('')){
        // console.log(charInStr);
        if(charInStr === characterToCount) {
            // console.log(charInStr === characterToCount);
            count = count + 1;
        }
    }
    return count;
}


// Functions insides an Object 
var employee = {
    firstName: 'Puneeth',
    lastName: 'Saga',
    fullName: function (gift) {
        var nameDefinition = `${this.firstName}.${this.lastName}, will get ${gift}`;
        return (nameDefinition);
    }
}


var powerOfNumAnonymous = function ( baseNumber, power ) {
    return Math.pow(baseNumber, power )
};



// function runTheFunctionAftertenSect ( ) {
//     console.log('This is running')
// }

// setInterval( runTheFunctionAftertenSect, 1000 );


// function addWithCallBack( a , b , callBack ) {
//     let sum = a + b;
//     callBack(sum);
// }
// function displayOutput (val) {
//     console.log(val);
//     console.log('From Callback');
// }
// addWithCallBack( 10 , 55 , displayOutput )

function successCallBack (val) {
    console.log(val);
    console.log('From successCallBack');
}
function failureCallBack (val) {
    console.log(val);
    console.log('From failureCallBack');
}
addTwoNum(10, 35, successCallBack, failureCallBack);



// Starting with class in javscript 

// let dog = new Animal('doggie');
// dog.eating('chewing');


let vinnie = new Cat('vinee', 'chewing');





