"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed"),
  headerButton = document.querySelector(".header-button"),
  todoRemove = document.querySelector(".todo-remove");

const todoData = [];

const render = function () {
  todoList.textContent = "";
  todoCompleted.textContent = "";
  headerInput.value = "";

  todoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo">' +
      item.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoComplete = li.querySelector(".todo-complete");
    btnTodoComplete.addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (headerInput.value.trim() !== "") {
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    render();
  } else {
    alert("Чё сделать то?");
  }
});
todoRemove.addEventListener("click", function () {
  console.log(todoList);
  // li.remove();
  render();
});

render();
