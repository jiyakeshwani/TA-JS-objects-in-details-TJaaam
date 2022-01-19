// More about class

//- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
//- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  description() {
    alert(`The square is ${width} * ${height}`);
  }
}
//- Create a method inside the class named `calcArea` that will return the area of the square.
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  description() {
    alert(`The square is ${width} * ${height}`);
  }
  calcArea() {
    return `The area of square is  ${width} `;
  }
}
//- Create a `area` getter method using which we can get the area of the square.
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  description() {
    alert(`The square is ${width} * ${height}`);
  }
  get area() {
    return `The area of square is  ${width} * ${height}`;
  }
}
// Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  description() {
    alert(`The square is ${width} * ${height}`);
  }
  set _area(area) {
    return `The Width and Heigth of the square is ${area}%2 `;
  }
}
//- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  description() {
    alert(`The square is ${width} * ${height}`);
  }
  set _area(area) {
    return `The Width and Heigth of the square is ${area}%2 `;
  }
  static isEqual(areaSqr1, areaSqr2) {
    if (areaSqr1 === areaSqr2) {
      return true;
    } else {
      return false;
    }
  }
}
//- Create two instance of the `Square` class
let sqr1 = new Square(24, 24);
let sqr2 = new Square(20, 20);
//- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
Square.area();
//- Check the `isEqual` method and pass the two instance you created above.
Square.isEqual(24, 24);
//## User Class

//- Create a `User` class that accepts `firstName` and `lastName` property
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//- Create a getter method named `fullName` that will return the full name of the person.
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} + ${this.lastName}`;
  }
}
//- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set fullName(fullName) {
    return fullName.trim("");
  }
}
//- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} + ${this.lastName}`;
  }
  nameContains(str) {
    if (this.fullName.includes(str)) {
      return true;
    } else {
      return false;
    }
  }
}
//- Create two instance of the `User` class
let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");
//- Check by using the `fullName` setter method with name bigger than 5 characters.
fullName("Arya Stark   ");
//- Check by using the `fullName` setter method with name less than 5 characters.
fullName("Arya Stark");
//- Check the `fullName` using getter
fullName();
//- Check the `nameContains` method
nameContains("tir");
