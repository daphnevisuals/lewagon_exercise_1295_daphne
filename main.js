// You can remove this line when you're ready.
console.log("Good luck!");
const button = document.querySelector(".button");
const success = document.querySelector(".success");
const form = document.querySelector(".form");

button.addEventListener("click", (e) => {
  form.classList.add("d-none");
  success.classList.remove("d-none");
});
