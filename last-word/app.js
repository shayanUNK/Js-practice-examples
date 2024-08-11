let getWordUser = document.querySelector("#getWordUser");
let getWordBtn = document.querySelector("#getWordBtn");
let show = document.querySelector("#show");
let output;

getWordBtn.addEventListener("click", (e) => {
  output = getWordUser.value.slice(-1);
  show.innerHTML = `the last word is: "${output}"`;
  if (getWordUser.value == "") {
    show.innerHTML = "String has zero length";
  }
});
