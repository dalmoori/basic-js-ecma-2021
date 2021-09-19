const users = [
  {
    name: 'John',
    point: 35,
  },
  {
    name: 'Jane',
    point: 40,
  },
  {
    name: 'Jack',
    point: 100,
  },
];

const reducer = (acc, obj) => acc + obj.point;

console.log(users.reduce(reducer, 0));
