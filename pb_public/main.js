const pb = new PocketBase("http://127.0.0.1:8090");
const usernameText = document.querySelector("#usernameText"); // Username 
let todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const addTodoButton = document.querySelector("#new-todo-button");
const deleteTodoButton = document.querySelector("#delete-todo-button");
const sectionNumber = document.querySelector("#section-number");

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// you can also fetch all records at once via getFullList
const records = await pb.collection('users').getFullList(200 /* batch size */, {
  sort: '-created',
});



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



    



