// var a1 = 'test';

// for(var a1 = 0; a1 < 10; a1+=2){
//     console.log(a1);
// }

// console.log('Testing')

// let test = 'let value';
// for(let test = 0; test < 10; test++) {
//     console.log(test);
// }

// // Works with initialization
// console.log(test2);
// let test2 = 10; // this throws error 
// // while declaring this with var doesnot throw any error


// Redeclaration
// var ran = 10;
// console.log(ran);

// var ran = 20;
// console.log(ran);


// // let ranLet = 50;
// // console.log(ranLet);

// // let ranLet = 80;
// // console.log(ranLet);


// function test() {
//     var a = 10;
//     console.log(a);
// }

// console.log(a);

// let is block scoped 
// let a = 5;
// console.log(a);
// {
//     let a = 2;
//     console.log(a);
// }
// console.log(a);


// // var is global scoped
// var a2 = 5;
// console.log(a2);
// {
//     var a2 = 2;
//     console.log(a2);
// }
// console.log(a2);


// Arrow Functinos

// const addNorma = function(num1, num2) {
//     console.log(this);
//     return(num1 + num2);
// }

// console.log(addNorma(1,4));


// const addArrow = (num1, num2) => {
//     console.log(this);
//     return (num1 + num2);
// }

// console.log(addArrow(6.6));


// const noArgFuncArrow = num1 => num1;

// console.log(noArgFuncArrow(6));



// class Cat {
//     constructor(name){
//         this.name = name;
//     }

//     returnName () {
//         console.log(this.name+ 'Normal Function')
//         console.log(this)
//     }

//     retArr = () => {
//         console.log(this.name+ 'Arrow Function')
//         console.log(this)
//     }
// }


// var newJerry = new Cat('Jerry');
// newJerry.retArr();
// newJerry.returnName();





// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow: () => { 
//         console.log(" | My name is " + this.name); // no 'this' binding here 
//         console.log(this);
//     }, 
//     thisInRegular: function thisInRegular() { 
//         console.log(" | My name is " + this.name); // 'this' binding works here 
//         console.log(this);
//     } 
// };
// me.thisInArrow(); 
// me.thisInRegular();

//default values to function arguments
// function multiple(a=1,b=20){
//     return(a*b)
// }
// console.log(multiple(3));



let personObject = { 
    name: "Ashutosh Verma", 
    thisInArrow: () => { 
        console.log(" | My name is " + this.name); // no 'this' binding here 
        console.log(this);
    }, 
    thisInRegular: function thisInRegular() { 
        console.log(" | My name is " + this.name); // 'this' binding works here 
        console.log(this);
    } 
};


console.log(Object.keys(personObject));
// var name =personObject.name;
// var thisInArrow =personObject.thisInArrow;
// var thisInRegular =personObject.thisInRegular;

// console.log(name);
// console.log(thisInArrow);
// console.log(thisInRegular);

// let {name, thisInArrow, thisInRegular} = personObject;
// console.log(name);
// console.log(thisInArrow);
// console.log(thisInRegular);