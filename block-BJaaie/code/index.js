// pseuclassical method

function CreateAnimal(location, noOfLegs) {
  this.location = location;
  this.noOfLegs = noOfLegs;
}
CreateAnimal.prototype = {
  eat: function eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function changeLocation(newLocation) {
    console.log(`I live in ${this.newLocation}`);
  },
  summary: function summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function CreateDog(name, color, location, noOfLegs) {
  this.name = name;
  this.color = color;
}
CreateDog.prototype = {
  bark: function bark() {
    alert(`I am ${this.name} and I can bark`);
  },
  changeName: function changeName(newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function summary() {
    return `I am ${this.name} and the color of me is ${this.color}. I can also bark`;
  },
};
Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

function CreateCat(name, colorOfEyes, location, noOfLegs) {
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}
CreateCat.prototype = {
  meow: function meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function changeName(newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

// class method

class Animal {
  constructor(location, noOfLegs) {
    this.location = location;
    this.noOfLegs = noOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    console.log(`I live in ${this.newLocation}`);
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}
class Dog extends Animal {
  constructor(location, noOfLegs, name, color) {
    super(location, noOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and the color of me is ${this.color}. I can also bark`;
  }
}

class Cat extends Animal {
  constructor(location, noOfLegs, name, colorOfEyes) {
    super(location, noOfLegs);
    this.name = name;
    this.color = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
