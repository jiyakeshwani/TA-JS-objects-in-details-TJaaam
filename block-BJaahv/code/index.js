/*## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects*/

// using function

function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}
function getProjects() {
  return user.noOfProjects;
}
function changeName(newName) {
  return newName;
}
function incrementProject(num) {
  return user.noOfProjects + num;
}
function decrementProject(num) {
  return user.noOfProjects - num;
}
//prototypal method

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}
let userMethods = {
  getProjects: function () {
    return user.noOfProjects;
  },
  changeName: function (newName) {
    return newName;
  },
  incrementProject: function (num) {
    return user.noOfProjects + num;
  },
  decrementProject: function (num) {
    return user.noOfProjects - num;
  },
};

// pseduclassical way

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    return newName;
  },
  incrementProject: function (num) {
    return this.noOfProjects + num;
  },
  decrementProject: function (num) {
    return this.noOfProjects - num;
  },
};
let user1 = new CreateUser("arya", 1, 5);
let user2 = new CreateUser("john", 2, 5);

// classmethod

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    return newName;
  }
  incrementProject(num) {
    return this.noOfProjects + num;
  }
  decrementProject(num) {
    return this.noOfProjects - num;
  }
}
