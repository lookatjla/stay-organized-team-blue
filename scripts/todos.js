"use strict";

let element = document.getElementById("userDropdown");
fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = data[i].name;
            opt.value = data[i].name;
            element.append(opt);
        }
    })

