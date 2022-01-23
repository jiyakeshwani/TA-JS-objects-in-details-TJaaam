class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log(`Hi my name is ${this.name} and I can eat`);
  }
  sleep() {
    console.log(`Hi my name is ${this.name} and I can sleep`);
  }
  walk() {
    console.log(`Hi my name is ${this.name} and I can walk`);
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    console.log(`Hi my name is ${this.name} and I can play ${this.sportsName}`);
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    console.log(
      `Hi my name is ${this.name} and I teach in ${this.instituteName}`
    );
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    console.log(
      `Hi my name is ${this.name} and I can create art of ${this.kind}`
    );
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    console.log(
      `Hi my name is ${this.name} and I play cricket from ${this.teamName}`
    );
  }
}
