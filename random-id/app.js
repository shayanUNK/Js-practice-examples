let yourID = document.querySelector("#your-id");
let createID = document.querySelector("#create-id");

let dateNow = Date.now();
let randomNumber = Math.random() * 100000000000000000;

let ID = dateNow + randomNumber;

createID.addEventListener("click", () => {
  yourID.append(ID);
});
