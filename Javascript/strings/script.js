var someString = "LOREM-Ipsumdolor. sit. amet.";

console.log(someString);
console.log('someString length = '+someString.length);
console.log('someString toLowerCase = '+someString.toLowerCase());
console.log('someString toUpperCase = '+someString.toUpperCase());
console.log('Searching for the index of "ip" = '+someString.indexOf('ip'));
console.log('Searching for the index of "xyz" = '+someString.indexOf('xyz'));
console.log('Searching for the index of "xyz" = '+someString.indexOf('xyz'));
console.log('Slicing of string' + someString.slice(6,11));
console.log('Slicing of string =' + someString.slice(6));
console.log('Repalcement of string =' + someString.replace("dolor", "rupee"));
console.log('Split of string below');
console.log(someString.split("-")); // Result :  ['LOREM', 'Ipsumdolor. sit. amet.']
console.log(someString.split(".")); // Result : ['LOREM-Ipsumdolor', ' sit', ' amet', '']
console.log('Starts with of string = '+ someString.startsWith('s')); // false
console.log('Starts with of string = '+ someString.startsWith('l')); // false
console.log('Starts with of string = '+ someString.startsWith('L')); // True

console.log(' My \\ is \n Puneeth\'P this are \t tabs '); 
// Result 
//  My \ is 
//  Puneeth'P this are 	 tabs 


var marks = 100;
var student = 'Ram';
var school = 'st claret'
var address = ' Bangalore'


console.log(`THe name is ${student} and marks is ${marks}  at school ${school} located at ${address}`);

// THe name is Ram and marks is 100  at school st claret located at  Bangalore


console.log(school+address);
// st claret Bangalore
console.log(school-address);
// NaN
console.log(school/address);
// NaN



// math object in javscript

console.log("this is the", Math); 


// TODO Assignement, 

//  Math -> sin , min,  max, ciel , floor

// SHowing the ramdom number is Math object
console.log(Math.random());
console.log( (Math.random() *100 ));
console.log( Math.ceil(Math.random() *100 ) );
console.log( Math.floor(Math.random() *100 ) );
//  parseInt


const randomNumber = Math.random() *100;
console.log(randomNumber, 'This is the paresed int of the cons randome Number varaible ' , parseInt(randomNumber));


const intInStringValue = '123abs';
console.log(intInStringValue, ' conversting this intInStringValue to parseInt' , parseInt(intInStringValue) ); //  Result of 123 is seen 


const intInStringValue123 = 'abs123abs';
console.log(intInStringValue123, ' conversting this intInStringValue123 to parseInt' , parseInt(intInStringValue123) ); //  Result of NaN is seen as the first character is not a number


var student = {};
console.log('Initialised the object', student)


student.name = 'puneeth';
student.id = 34212;
student.marks = '70%';


console.log('Added properties to the object', student)



var temp;
console.log('Initialised the temp', temp); // undefined
temp = 'lroem';
console.log('Value to the temp', temp);


var studentOther = student;
console.log('Initialised the studentOther object', studentOther)
studentOther.name = 'someOther';
studentOther.marks = '90%';
console.log('Added properties to the studentOther object', studentOther)

console.log('Previous object', student)


var studentNewClone = {...student}
console.log('Initialised the studentNewClone object', studentOther)
studentNewClone.name = 'studentNewClone';
studentNewClone.marks = '20%';
console.log('Added properties to the studentNewClone object', studentNewClone)
console.log('Previous object', student)
console.log('Previous studentOther ', studentOther)



// Todo 
// access properties using dot and [] notation
// nested object


