function Animal() { this.canMove = true;}
Animal.prototype.constructor = Animal

function Bird() { this.canFly = true;}
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird

function Canary() { this.colour = "yellow";}
Canary.prototype = new Bird();
Canary.prototype.constructor = Canary

function Pigeon() { this.colour = "grey";}
Pigeon.prototype = new Bird();
Pigeon.prototype.constructor = Pigeon

function show(animal) {
  var res = "";
  res += animal.canMove ? "Can move, " : "Can't move, ";
  res += animal.canFly ? "can fly, " : "can't fly, ";
  res += "colour is " + animal.colour;
  return res;
}

