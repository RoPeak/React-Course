const firstName = "John";
const greeting = `Hello ${firstName}`;

console.log(greeting);

const a = 10;
const b = 20;
const desc = `The sum of ${a} and ${b} is ${a + b}`;

console.log(desc);

const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};
const userDesc = `User Information:
Name: ${user.name}
Age: ${user.age}
City: ${user.city}`;

console.log(userDesc);

// Array find
const todoList = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Practice React", completed: true },
  { id: 3, task: "Build a project", completed: false },
];
const todoByID = todoList.find((todo) => todo.id === 1);
console.log(todoByID);

// Array filter
const completedTodos = todoList.filter((todo) => todo.completed === true);
console.log(completedTodos);

// Array forEach
todoList.forEach((todo, index) => {
  console.log(index + ": " + todo.task);
});

// Array map
const mappedTodos = todoList.map((todo) => {
  return { id: todo.id, desc: todo.task };
});
console.log(mappedTodos);
