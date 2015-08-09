var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function (newLocation) {
  return this.location = newLocation;
};

Zoo.prototype.open = function () {
  return this.status = "open";
};

Zoo.prototype.close = function () {
  return this.status = "closed";
};

Zoo.prototype.isOpen = function () {
  if (this.status === "open") {
    return "Open!";
  } else {
    return "Closed!";
  }
};

Zoo.prototype.addAnimal = function (animal) {
  if (this.status === "open" && animal.constructor === Animal &&                this.animals.indexOf(animal) === -1) {
    this.animals.push(animal);
  } else {
    return "Zoo is closed"
  }
};

Zoo.prototype.removeAnimal = function (animal) {
  if (this.status === "open") {
    this.animals.splice(this.animals.indexOf(animal), 1);
  }
};
module.exports = Zoo;
