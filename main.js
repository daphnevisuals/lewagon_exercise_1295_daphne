// You can remove this line when you're ready.
console.log("Good luck!");
const button = document.querySelector(".button");
const success = document.querySelector(".success");
const formDiv = document.querySelector(".form");

button.addEventListener("click", (e) => {
  formDiv.classList.add("d-none");
  success.classList.remove("d-none");
});

const form = document.querySelector("#userForm");
form.addEventListener("submit", function (e) {
  if (form.checkValidity()) {
    button.addEventListener("click", (e) => {
      formDiv.classList.add("d-none");
      success.classList.remove("d-none");
    });
  }
  alert("you need to fill form");
  e.preventDefault();
});
