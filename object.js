class A {
    constructor() {
        // console.log('inside const.' , this)
        this.x = 2;
    }
    
    getSquare () {
        return this.x * this.x;
    }
    
    printSq() {
        const sq  = this.getSquare();
        console.log(sq);
    }
}

class B extends A {
    constructor() {
        super();
        this.state = {
            
        }; 
    }
}

// const a = new A();

// console.log(a);

// a.printSq()

const b = new B();

console.log(b);





// created an empty object
const a = {}

// you can assign a value like this.
a.x = 2;
a.y = 3;

// logging output
console.log(a);
