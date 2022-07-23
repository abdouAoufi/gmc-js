function makeCar(brand = "no brand", model = "no model") {
    console.log("Making a car please wait .....");
    console.log("Your car is ready ", brand, model);
}

// makeCar("BMW", "645i");

// OOP object oriented programming < = = = = = = >

class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    // ! method in JS
    speedUp() {
        console.log("The", this.model, "is accelerating ...");
    }

    stop() {
        console.log("The", this.model, " is stopping");
    }

    getColor() {
        console.log(this.model, " has color ", this.color);
    }

    changeColor(newColor) {
        this.color = newColor;
    }
}

const bmw = new Car("BMW", "645i", "black");
const mercedes = new Car("Mercedes", "class A", "gray");

// bmw.speedUp();
// mercedes.stop();

mercedes.getColor(); // => gray
mercedes.changeColor("white");
mercedes.getColor(); // => white
bmw.getColor();