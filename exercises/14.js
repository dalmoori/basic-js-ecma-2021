class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }
}

const aUser = new User('Kaylee', 20);

console.log(aUser.getName());
console.log(aUser.getAge());

aUser.setName('John');
aUser.setAge(25);

console.log(aUser.getName());
console.log(aUser.getAge());
