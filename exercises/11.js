const user = {
  name: 'John',
  age: 20,
  job: 'Designer',
  getName() {
    console.log(this.name);
  },
};

user.getName();
