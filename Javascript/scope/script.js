// class School {
//     constructor(name, syllabus){
//         this.name = name;
//         this.syllabus = syllabus;
//     }

//     activitiesOfSchool(){
//         console.log(this.name + " is giving " + this.syllabus + " mode of eduction")
//     }

// }

// class NaryanaCollege extends School { 
//     constructor(numberOfStudents, noOfEnggeringCourse, collegeName) {
//         super(collegeName, '10th std');
//         this.activitiesOfSchool();
//         this.collegeName = collegeName;
//         this.noOfEnggeringCourse = noOfEnggeringCourse;
//         this.numberOfStudents = numberOfStudents;
//     }

//     collegeDetails(){
//         console.log(this.collegeName + ' has = ' + this.numberOfStudents + ' and  course = ' + this.noOfEnggeringCourse );
//     }
// }

// var naryanaCollege = new NaryanaCollege(100, 6, 'Narayana');
// naryanaCollege.collegeDetails();






// var test = 10; // globally scoped

// function makeSomeAdditon () {
//     var temp = 40; // local scoped 
//     var sum = test + temp; // here the test is golbally scoped and can be accisble 
//     console.log(sum+"sum of temp and test")
// }

// makeSomeAdditon();

// console.log('The value of temp = ' + temp ); // since the temp is scoped the function it wont be accesible


// var output = 0; // math output 

// function calaculation (operation) {
//     var a = 10 , b = 20; 
//     console.log('first function = ' + operation);
//     function add(num1, num2) {
//         console.log(num1+num2);
//         console.log(a+b);
//     }

//     add(100,700);
// }


// calaculation('addition');


// function someCalc(){
//     var name = 'John';
//     function printName(){
//         console.log(name); // this line would have the access to the variiable name defined above the funciton printName()
//     }
//     printName();
// }
// someCalc();


// modifying the H1 tag 
// var heading = document.getElementById('main-heading');
// heading.innerHTML = "JS DOM Working!"

// var heading = document.getElementsByTagName('h1'); // elements will return arrays
// heading[0].innerText = 'Using the inner text';


var buttons = document.querySelectorAll('.first-section button');
console.log(buttons);
buttons[0].style['background-color'] = 'green';
buttons[0].style['color'] = '#ffff';
buttons[1].style['background-color'] = 'blue';
buttons[1].style['color'] = '#fefefe';
















