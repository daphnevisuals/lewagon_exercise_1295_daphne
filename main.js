const button = document.querySelector(".button");
const success = document.querySelector(".success");
const formDiv = document.querySelector(".form");

const form = document.querySelector("#userForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let children = event.target.querySelectorAll("input, checkbox, select");
  console.log(children);
  let findEmpty = Array.from(children).find((element) => {
    if (element.value.length < 1) {
      return true;
    }
    return false;
  });
  if (findEmpty) {
    alert(findEmpty.name);
  } else {
    formDiv.classList.add("d-none");
    success.classList.remove("d-none");
  }
});
