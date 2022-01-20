// /# Inheritance

/*Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:*/

//- `name`
//- `colorOfEyes`

//Methods:

//- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

//- `changeName(newName)` - accepts the name property and updates the name of the dog

//- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

//- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow

function createAnimal(location, noOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.noOfLegs = noOfLegs;
  return animal;
}
function createDog(name, color) {
  let dog = Object.create(dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}
function createCat(name, colorOfEyes) {
  let cat = Object.create(catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}
let animalMethods = {
  eat: function eat() {
    console.log(`I live in ${animal.location} and I can eat`);
  },
  changeLocation: function changeLocation(newLocation) {
    console.log(`I live in ${animal.newLocation}`);
  },
  summary: function summary() {
    return `I live in ${animal.location} and I have ${animal.numberOfLegs}`;
  },
};
let catMethods = {
  meow: function meow() {
    alert(`I am ${cat.name} and I can do mewo meow 😹`);
  },
  changeName: function changeName(newName) {
    cat.name = newName;
    return cat.name;
  },
  changeColorOfEyes: function changeColorOfEyes(newColor) {
    cat.colorOfEyes = newColor;
    return cat.colorOfEyes;
  },
  summary: function summary() {
    return `I am ${cat.name} and the color of my eyes are ${cat.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catMethods, animalMethods);

let dogMethods = {
  bark: function bark() {
    alert(`I am ${dog.name} and I can bark`);
  },
  changeName: function changeName(newName) {
    dog.name = newName;
    return dog.name;
  },
  changeColor: function changeColor(newColor) {
    dog.color = newColor;
    return dog.color;
  },
  summary: function summary() {
    return `I am ${dog.name} and the color of me is ${dog.color}. I can also bark`;
  },
};
Object.setPrototypeOf(dogMethods, animalMethods);
