// ! -> Non null assertion operator. This means "It exists. Its not null!"
// This is a TypeScript Operator
// const btn = document.getElementById("btn")!;
// <HTMLInputElement>input.value <= You could also use this but it doesn't work with jsx
// const input = document.getElementById("todoinput")! as HTMLInputElement;

// btn?.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });

// // Type Assertions

// const mystery: unknown = "Hello World";

// // If we want to asset that we know more than TypeScript
// // This could cause lots of issues if we set it to the wrong type
// const numCharacters = (mystery as string).length;

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!; // Smart can look at what you are selecting an infer the type
const list = document.querySelector("ul")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

interface Todo {
  text: string;
  completed: boolean;
}

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  newLi.append(todo.text);
  newLi.append(checkBox);
  list.appendChild(newLi);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(newTodo));
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
