var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Denver")
      expect(zoo.location).toEqual("Denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.status = "open";
      expect(zoo.isOpen()).toEqual("Open!");
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual("Closed!");
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(pig)).toEqual("Zoo is closed");
    });
    it('should add an animal to the animals array', function(){
      zoo.status = "open";
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });

    it('should only add instances of animals', function(){
      zoo.status = "open";
      zoo.addAnimal("dog");
      expect(zoo.animals.length).toEqual(0);
    });

    it('should not add duplicates', function(){
      zoo.status = "open";
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.status = "open";
      zoo.addAnimal(pig);
      zoo.removeAnimal(pig);
      expect(zoo.animals.length).toEqual(0);
    });
  });
});
