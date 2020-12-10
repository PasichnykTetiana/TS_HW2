class Car {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name);
    }
}
class Peugeot extends Car {
    constructor() {
        super("Peugeot");
    }
    model() {
        console.log("3008");
    }
}
class Volvo extends Car {
    constructor() {
        super("Volvo");
    }
    model() {
        console.log("c90");
        console.log("c92");
    }
}
class Renault extends Car {
    constructor() {
        super("Renault");
    }
    model() {
        console.log("Logan");
    }
}
let vol = new Volvo();
vol.move();
vol.model();
let peg = new Peugeot();
peg.move();
peg.model();
let ren = new Renault();
ren.move();
ren.model();
//# sourceMappingURL=01.js.map