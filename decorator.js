//Concrete Component

function Coffee() {
    this.cost = function () {
        return 1;
    };
}

function Milk(coffee) {
    this.cost = function () {
        return coffee.cost() + 0.5;
    };
}

function Whip(coffee) {
    this.cost = function () {
        return coffee.cost() + 0.7;
    };
}

function Sprinkles(coffee) {
    this.cost = function () {
        return coffee.cost() + 0.2;
    };
}

var coffee = new Milk(new Whip(new Sprinkles(new Coffee())));
console.log(coffee.cost());


