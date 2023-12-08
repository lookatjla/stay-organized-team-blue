"user strict"

window.onload = function (_event) {
  getUsersData()
    .then(populateToDoUsersDropdown)



  // form.onsubmit = getToDoData
}

function getUsersData() {
  // event.preventDefault()
  // const dropDown1 = event.target
  // const id = document.getElementById("userNames").value

  return fetch(`http://127.0.0.1:8083/api/users`)
    .then(response => response.json())
}

function populateToDoUsersDropdown(users, userSelect) {
  // event.preventDefault()
  let html = `<option>Select Your Username...</option>`

  for (let index = 0; index < users.length; index += 1) {
    const currentUser = users[index];
    html += `<option value="${currentUser.id}">${currentUser.username}</option>`

  }

  console.log(users)
  userSelect = document.getElementById("userNames")
  userSelect.innerHTML += html
  showCategory()
}

function showCategory() {
  let html = `<option>Select A Category...</option>`

  fetch(`http://127.0.0.1:8083/api/categories`)
    .then(response => response.json())
    .then(data => {

      for (let index = 0; index < data.length; index += 1) {
        const currentCategory = data[index];
        html += `<option value="${currentCategory.name}">${currentCategory.name}</option>`
      }
      let selectElement = document.getElementById("categoryNames")
      selectElement.innerHTML = html
    })
}

function newToDoItem() {
  // let html = ""

  const userSelect = document.getElementById("userNames").value
  const categoryNamesSelect = document.getElementById("categoryNames").value
  const urgencySelect = document.getElementById("urgency").value
  const description = document.getElementById("description").value
  const deadline = document.getElementById("deadline").value
   const toDoResults = {
      userid: userSelect,
      category: categoryNamesSelect,
      description: description, 
      deadline: deadline,
      priority: urgencySelect, 
  }
  
  // let html = `
  // <br>
  // <h2>Here is Your New To-Do Item!</h2>
  // <p> ${toDoResults.userid} </p>
  // <p> ${toDoResults.category} </p>
  // <p> ${toDoResults.description} </p>
  // <p> ${toDoResults.deadline} </p>
  // <p> ${toDoResults.priority} </p>

  // `

  // Create JSON object to include in the request body
 
// Send the request 
fetch("http://localhost:8083/api/todos", {
method: "POST",
body: JSON.stringify(toDoResults), headers: {"Content-type":
              "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => {
    // If the POST finishes successfully, display a message
    let confirmationMessage =
       document.getElementById("newToDo");
    confirmationMessage.innerHTML = "New To-Do Task Item added";
  });
  // let selectElement = document.getElementById("newToDo")
  // selectElement.innerHTML = html
  

// console.log(html)

}


// function addOnToDoList(toDo) {
//   const toDoElement = document.querySelector("section#toDoList")
//   toDoElement.innerHTML += `

// <div class="card border-primary mb-3" style="max-width: 18rem; margin-left: 50rem;">
//   <div class="card-header">To-Do Details: </div>
//   <div class="card-body text-primary">
//     <h2 class="card-title">Title:</h2>
//     <h3 class="card-title">${toDo.title}</h3>
//     <p class="card-text">Completion Status: ${toDo.completed}</p>
//   </div>
// `
//   console.log(toDo)
// }