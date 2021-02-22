Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {
}

MovingObject.prototype.move = function() {
    console.log(`this  is moving! =) ${this}`)
}

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.start = function() {
    console.log("lets go!");
};

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.end = function() {
    console.log("we are here!");
};

ship = new Ship();

asteroid = new Asteroid();

ship.start();
ship.move();

console.log(Ship.prototype instanceof MovingObject);
// asteroid.end();
asteroid.move();


