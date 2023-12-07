"use strict";

// populate dropdown with user names from api
let selectElement = document.getElementById("userDropdown");
fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            // <option value="ID">NAME</option>
            let opt = document.createElement("option");
            opt.innerText = data[i].name;
            opt.value = data[i].id;
            selectElement.append(opt);
        }
    })


// display users' tasks when user is clicked in dropdown
window.onload = init;

function init() {
    const searchBtn = document.getElementById("searchButton");
    searchBtn.onclick = onSearchBtnClicked;
}

function onSearchBtnClicked() {
    const displayTask = document.getElementById("displayTask");
    let message = "Search button has been clicked!"
    displayTask.innerText = message;
}