const pb = new PocketBase("http://127.0.0.1:8090");
const usernameText = document.querySelector("#usernameText"); // Username 
let todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const addTodoButton = document.querySelector("#new-todo-button");
const deleteTodoButton = document.querySelector("#delete-todo-button");
const sectionNumber = document.querySelector("#section-number");


addTodoButton.addEventListener('click', async event => {
  const taskItem = await pb.collection('todo_list').create({
    todo_item: todoInput.value,
  })

  let input = document.createElement('p');
  input.className = "todo-box";
  input.id = "todo-box";
  
  input.innerHTML = todoInput.value;


  console.log(todoInput.value);
  todoList.insertAdjacentElement("beforeend", input);

  todoInput.value = ""
});



    



