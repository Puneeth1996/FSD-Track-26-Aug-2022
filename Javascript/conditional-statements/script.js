// if statement
var a, b;
a = 1;
b = 2;
if(a<b) {
    // truthy statements inside if loop gets executed 
    console.log("Yes a is less than b");
}


// if else statement

if( a > b ){
    // truthy statements inside if loop gets executed 
    console.log("Inside If else | Yes a is less than b");
}
else {
    // the first else statement
    console.log('THe else statement')
}

var c = 3;

// if else if statement
if(c < b) {
    console.log(' c is greater than b');
} else if(c < a ) {
    console.log('c is greater than a');
} else {
    console.log('c is the smallest compared to a & b');
}


if(c > b) {
    console.log(' c is greater than b');
} else if(c > a ) {
    console.log('c is greater than a');
} else if( (c > a ) && (c > b) ) {
    console.log('c is the greatest when compared to both a & b');
} else {
    console.log('c is the smallest compared to a & b');
}


// nested if 
if( (a>0) && (b>0) && (c>0) ){
    console.log('All 3 a b c are greater than 0');
    if( a && b && c ){ 
        console.log('Another way! All 3 a b c are');
    }
}



// TODO 
// Build a simple script to check the grade of student whose marks are stored in variable
// for A grade , marks should be more than 80
// for B grade , marks should be more than 60
// for C grade , marks should be more than 35
// else if marks is less than 35 than fail 


// for 

// Syntax for genral for loop 
// for( initialization; condition; increatment/decrement ){
    // statements inside the iterator
// }

// for( var i = 1; i <= 10 ; i++ ) {
//     console.log('The Value of i : ' + i * i );
// }

// *****
// ****
// ***
// **
// *
for ( var row = 5; row >= 1 ; row -- ){
    for ( var col = 1; col <= row; col++ ) {
        console.log("*");
    }
    console.log('\n');
}






// // while loop 

var i = 1; 
while(i <= 10) {
    console.log("While loop value of i :"+i)
    i++;
}



// // do while loop 

var j = 1; 
do {
    console.log("DO While loop value of j :"+j)
    j++;
} while (j <=10);


var row = 0;
var col = 1;
do {
    do {
        console.log(col);
        col--;
    } while (col && col <= row)
    row--;
} while(row >= 1)



// switch statement
var day = "6"

switch( day ){
    case "1": 
        console.log('Monday');
        break;
    case "2": 
        console.log('Tuesday');
        break;
    case "3": 
        console.log('Wednesday');
        break;
    case "4": 
        console.log('Thrusday');
        break;
    case "5": 
        console.log('Friday');
        break;
    case "6": 
        console.log('Saturday');
        break;
    case "7": 
        console.log('Sunday');
        break;
    default: 
        console.log('No Unkown WeekDay,');
}


var month = 'June'
switch(month) {
    case "April": 
    case "June": 
    case "Septemeber": 
    case "Novemenber":
        console.log('Yes THis month has only 30 days');
        break;
    case 'Feb':
        console.log('Might be 28 oor 29 days in case of leap year');
        break;
    default: 
        console.log('Standard Month with 31 days');
}





