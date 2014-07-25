var Strategy = function () {
    this.exec = function () {
    };
};

var StrategyAdd = function () {
    this.exec = function (a, b) {
        console.log(a + b);
    };
};

StrategyAdd.prototype = new Strategy();
StrategyAdd.prototype.constructor = StrategyAdd;

var StrategyMultiply = function () {
    this.exec = function (a, b) {
        console.log(a * b);
    };
};

StrategyMultiply.prototype = new Strategy();
StrategyMultiply.prototype.constructor = StrategyMultiply;


var StrategyDivide = function () {
    this.exec = function (a, b) {
        if (b !== 0) {
            console.log(a / b);
        } else {
            throw new Error("Divide by zero exception");
        }
    };
};


StrategyDivide.prototype = new Strategy();
StrategyDivide.prototype.constructor = StrategyDivide;

var Context = function (strategy) {
    this.exec = function (a, b) {
        strategy.exec(a, b);
    }
};

var add = new Context(new StrategyAdd());
add.exec(3, 4);

var multiply = new Context(new StrategyMultiply());
multiply.exec(3, 4);

var divide = new Context(new StrategyDivide());
divide.exec(3, 4);