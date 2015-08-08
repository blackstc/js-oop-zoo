function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.growUp = function () {
  return this.age += 1;
};

Animal.prototype.feed = function () {
  if (this.awake === true) {
    return "NOM NOM NOM!";
  } else {
    return "Animal is sleeping";
  }
};

Animal.prototype.wakeUp = function () {
  return this.awake = true;
};

Animal.prototype.sleep = function () {
  return this.awake = false;
};
Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

module.exports = Animal;
