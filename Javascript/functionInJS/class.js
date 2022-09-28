class Animal {
    constructor(name, valOfEating) {
        console.log('Animal Class Constructor methods');
        this.name = name;
        this.valOfEating = valOfEating;
    }
    eating(val) {
        console.log(val)
        console.log( this.name + 'is '+ this.valOfEating);
    }
}

class Cat extends Animal {
    constructor(name, valOfEating) {
        super(name, valOfEating)
        console.log('Cat class in heriting the Animal class');
        this.name = name;
        this.valOfEating = valOfEating;
        console.log('this object in cat class = ', this);
        this.eating('someVal')
    }
    sound() {
        console.log("meewoo")
    }
}



