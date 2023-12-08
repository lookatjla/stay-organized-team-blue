"use strict";

// populate dropdown with user names from api
let selectElement = document.getElementById("userDropdown");

fetch("http://localhost:8083/api/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      // <option value="ID">NAME</option>
      let opt = document.createElement("option");
      opt.innerText = data[i].name;
      opt.value = data[i].id;
      selectElement.append(opt);
    }
  });

// display users' tasks when user is clicked in dropdown
window.onload = init;

function init() {
  const searchBtn = document.getElementById("searchButton");
  searchBtn.onclick = onSearchBtnClicked;
}

function onSearchBtnClicked() {
  const userID = selectElement.value;
  fetchTodosByUser(userID).then(viewTasks);
}

function fetchTodosByUser(selectedUserID) {
  console.log({ selectedUserID });
  return fetch(`http://localhost:8083/api/todos/byuser/` + selectedUserID).then(
    (response) => response.json()
  );
}

function viewTasks(todos) {
  let html = "";   // "<h2>TODOS:</h2><div>3</div><div>3</div><div>3</div>"
  for (let i = 0; i < todos.length; i++) {
    const task = todos[i];
    html += `<p>Task: ${task.id}, ${task.category}, ${task.description}<p>`
  }
     const displayTask = document.getElementById("displayTask");
  displayTask.innerHTML = html;
  }
 
