class Car {
    abstract model();
    constructor(public name: string){
     }

    public move(): void {
        console.log(this.name)
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
let vol: Volvo = new Volvo();
vol.move();
vol.model();
let peg: Peugeot = new Peugeot();
peg.move();
peg.model();
let ren: Renault = new Renault();
ren.move();
ren.model();

